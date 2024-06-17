<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings">
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface RootListBoxProps extends PrimitiveProps {
  class?: string;
}
</script>

<script lang="ts" setup>
import { computed, provide } from "vue";
import type { ProvideListbox } from "./types";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<RootListBoxProps>(), {
  as: "ul",
});

const selected = defineModel<string[]>("selected", { required: true });

provide<ProvideListbox>("options", {
  selected,
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {};

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
