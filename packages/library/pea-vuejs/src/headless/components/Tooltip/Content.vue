<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition name="fade-in">
        <Primitive
          v-if="options?.visible.value"
          :as="as"
          :as-child="asChild"
          v-bind="bindings"
        >
          <slot />
        </Primitive>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface ContentTooltipProps extends PrimitiveProps {
  class?: string;
}
</script>

<script lang="ts" setup>
import { computed, inject } from "vue";
import type { ProvideTooltip } from "./types";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<ContentTooltipProps>(), {
  as: "div",
});

const options = inject<ProvideTooltip>("options");

const bindings = computed(() => {
  const bindings: Record<string, any> = {};

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
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
