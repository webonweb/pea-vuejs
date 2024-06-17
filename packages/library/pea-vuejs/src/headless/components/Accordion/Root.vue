<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings">
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { ProvideAccordion } from "./types";
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface RootAccordionProps extends PrimitiveProps {
  type?: "single" | "multi";
  openKeys?: string[];
  class?: string;
}
</script>

<script lang="ts" setup>
import { provide, ref, computed } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<RootAccordionProps>(), {
  as: "div",
  type: "single",
});

const current = ref<string[]>(props.openKeys as string[]);

provide<ProvideAccordion>("options", {
  current,
  type: props.type,
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    role: "none",
    "aria-type": props.type,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
