<template>
  <Transition name="slide" @after-leave="onAfterLeave">
    <Primitive
      v-if="options?.visible.value"
      :as="as"
      :as-child="asChild"
      v-bind="bindings"
    >
      <slot />
    </Primitive>
  </Transition>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface PanelDrawerProps extends PrimitiveProps {
  class?: string;
}
</script>

<script lang="ts" setup>
import { computed, inject } from "vue";
import type { ProvideDrawer } from "./types";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<PanelDrawerProps>(), {
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

const onAfterLeave = () => (options.open.value = false);
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
