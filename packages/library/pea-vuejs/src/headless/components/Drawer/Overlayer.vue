<template>
  <Transition
    name="fade-in"
    @after-enter="onAfterEnter"
    @after-leave="onAfterLeave"
  >
    <Primitive
      v-if="options?.open.value"
      :as="as"
      :as-child="asChild"
      v-bind="bindings"
      @click.prevent="!options.static ? (options.visible.value = false) : null"
    >
      <slot />
    </Primitive>
  </Transition>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface OverlayerDrawerProps extends PrimitiveProps {
  class?: string;
}
</script>

<script lang="ts" setup>
import { computed, inject } from "vue";
import type { ProvideDrawer } from "./types";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<OverlayerDrawerProps>(), {
  as: "div",
});

const options = inject<ProvideDrawer>("options");

const bindings = computed(() => {
  const bindings: Record<string, any> = {};

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});

const onAfterEnter = () => (options!.visible.value = true);

const onAfterLeave = () => (options!.open.value = false);
</script>

<style lang="scss" scoped>
.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.4s;
}
.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}
</style>
