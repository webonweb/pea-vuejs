<template>
  <component v-bind="bindings" :is="icon" />
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface IconAccordionProps extends PrimitiveProps {
  name: string;
  class?: string;
}
</script>

<script lang="ts" setup>
import { computed, defineAsyncComponent } from "vue";

const props = defineProps<IconAccordionProps>();

const icon = computed(() => {
  const name = props.name;
  return defineAsyncComponent(
    () => import(`../../assets/icons/${name}.svg?component`)
  );
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {};

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
