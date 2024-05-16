<template>
  <Primitive :as :as-child="asChild" v-bind="bindings" />
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface RootSepeartorProps extends PrimitiveProps {
  class?: string;
  type?: "solid" | "dashed";
  orientation?: "horizontal" | "vertical";
}
</script>

<script lang="ts" setup>
import { computed, defineProps } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<RootSepeartorProps>(), {
  as: "div",
  type: "solid",
  orientation: "horizontal",
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    role: "separator",
    "aria-type": props.type || "solid",
    "aria-orientation": props.orientation || "horizontal",
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
