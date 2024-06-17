<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings">
    {{
      options?.visible?.value
        ? options.text
        : `${options?.text.slice(0, options.max)}...`
    }}
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface TriggerTextWrapperProps extends PrimitiveProps {
  class?: string;
}
</script>

<script lang="ts" setup>
import { computed, inject } from "vue";
import { Primitive } from "@pea-vuejs/primitive";
import type { ProvideTextWrappper } from "./types";

const props = withDefaults(defineProps<TriggerTextWrapperProps>(), {
  as: "p",
});

const options = inject<ProvideTextWrappper>("options");

const bindings = computed(() => {
  const bindings: Record<string, any> = {};

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
