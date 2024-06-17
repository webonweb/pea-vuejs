<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings">
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { ProvideAccordion } from "./types";
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface ItemAccordionProps extends PrimitiveProps {
  indexKey: string;
  class?: string;
}
</script>

<script lang="ts" setup>
import { provide, computed, inject } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<ItemAccordionProps>(), {
  as: "details",
});

const options = inject<ProvideAccordion>("options");
const bindings = computed(() => {
  const bindings: Record<string, any> = {
    role: "group",
    id: props.indexKey,
    open:
      options &&
      options.current.value &&
      options.current.value.includes(props.indexKey as string),
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});

provide<string>("key", props.indexKey);
provide<string>("uniqueId", `content-${props.indexKey}`);
</script>
