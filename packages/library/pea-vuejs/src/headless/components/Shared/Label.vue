<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings">
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface SharedLabelProps extends PrimitiveProps {
  class?: string;
  for: string;
}
</script>

<script lang="ts" setup>
import { computed } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<SharedLabelProps>(), {
  as: "label",
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    for: props.for,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
