<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings">
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface RootCardProps extends PrimitiveProps {
  class?: string;
}
</script>

<script lang="ts" setup>
import { computed } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<RootCardProps>(), {
  as: "div",
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    role: "card",
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
