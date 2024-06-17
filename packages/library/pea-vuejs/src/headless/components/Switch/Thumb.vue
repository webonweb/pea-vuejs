<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings" />
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface ThumbSwitchProps extends PrimitiveProps {
  class?: string;
}
</script>

<script lang="ts" setup>
import { computed } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<ThumbSwitchProps>(), {
  as: "span",
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    "aria-hidden": true,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
