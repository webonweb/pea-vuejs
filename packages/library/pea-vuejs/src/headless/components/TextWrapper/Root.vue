<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings">
    <slot :visible="visible" />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface RootTextWrapperProps extends PrimitiveProps {
  class?: string;
  max?: number;
  text: string;
}
</script>

<script lang="ts" setup>
import { computed, ref, provide } from "vue";
import { Primitive } from "@pea-vuejs/primitive";
import type { ProvideTextWrappper } from "./types";

const props = withDefaults(defineProps<RootTextWrapperProps>(), {
  as: "div",
  max: 100,
});

const visible = ref(props.text.length < props.max);
provide<ProvideTextWrappper>("options", {
  visible,
  text: props.text,
  max: props.max,
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {};

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
