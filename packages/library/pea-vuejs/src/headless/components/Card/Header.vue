<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings">
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface HeaderCardProps extends PrimitiveProps {
  class?: string;
}
</script>

<script lang="ts" setup>
import { computed, inject } from "vue";
import type { ProvideCard } from "./types";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<HeaderCardProps>(), {
  as: "div",
});

const options = inject<ProvideCard>("options");

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    as: ["section", "article"].includes(options?.type as string)
      ? "header"
      : "div",
    id: `card-header-${options?.id}`,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
