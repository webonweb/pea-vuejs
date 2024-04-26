<template>
  <Primitive :as :as-child="asChild" v-bind="bindings" />
</template>
<script lang="ts">
import { SeparatorOrientation } from "@pea-vuejs/types/src/components/sepearator";
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface RootSepeartorProps extends PrimitiveProps {
  class?: string;
  orientation?: SeparatorOrientation;
}
</script>

<script lang="ts" setup>
import { computed, defineProps } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<RootSepeartorProps>(), {
  as: "div",
  orientation: SeparatorOrientation.HORIZONTAL,
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    role: "separator",
    "aria-orientation": props.orientation || SeparatorOrientation.HORIZONTAL,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
