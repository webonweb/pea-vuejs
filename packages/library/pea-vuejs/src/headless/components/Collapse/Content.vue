<template>
  <Transition name="slide">
    <Primitive
      v-if="options?.open.value"
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

export interface ContentCollapseProps extends PrimitiveProps {
  class?: string;
}
</script>

<script lang="ts" setup>
import { inject, computed } from "vue";
import type { ProvideCollapse } from "./types";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<ContentCollapseProps>(), {
  as: "div",
});

const options = inject<ProvideCollapse>("options");

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    id: options?.id,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
