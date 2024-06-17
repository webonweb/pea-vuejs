<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings" />
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface ProgressProgressProps extends PrimitiveProps {
  max?: string;
  value: string;
}
</script>

<script lang="ts" setup>
import { computed } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<ProgressProgressProps>(), {
  as: "progress",
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    max: props.max || "100",
    value: props.value,
    "aria-describedby": "progress-description",
  };

  return bindings;
});
</script>
