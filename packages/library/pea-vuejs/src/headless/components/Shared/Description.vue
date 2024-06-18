<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings">
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface SharedDescriptionProps extends PrimitiveProps {
  class?: string;
  id: string;
}
</script>

<script lang="ts" setup>
import { computed } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<SharedDescriptionProps>(), {
  as: "span",
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    id: props.id,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
