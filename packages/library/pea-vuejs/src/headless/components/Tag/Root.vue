<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings">
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface RootTagProps extends PrimitiveProps {
  class?: string;
  ariaLabel?: string;
}
</script>

<script lang="ts" setup>
import { computed } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<RootTagProps>(), {
  as: "span",
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    role: "note",
    "aria-label": props.ariaLabel || undefined,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
