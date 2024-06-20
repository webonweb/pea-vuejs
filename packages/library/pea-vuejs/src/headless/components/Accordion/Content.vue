<template>
  <Transition name="slide">
    <Primitive
      :as="as"
      v-if="
        options &&
        options.current.value &&
        options.current.value.includes(key as string)
      "
      :as-child="asChild"
      v-bind="bindings"
    >
      <slot />
    </Primitive>
  </Transition>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface BaseAccordionProps extends PrimitiveProps {
  class?: string;
}
</script>

<script lang="ts" setup>
import { inject, computed } from "vue";
import type { ProvideAccordion } from "./types";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<BaseAccordionProps>(), {
  as: "div",
});

const options = inject<ProvideAccordion>("options");
const key = inject<string>("key");

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    id: inject<string>("uniqueId"),
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
