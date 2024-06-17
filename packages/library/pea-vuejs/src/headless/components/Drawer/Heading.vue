<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings">
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface HeadingDrawerProps extends PrimitiveProps {
  class?: string;
}
</script>

<script lang="ts" setup>
import { computed, inject } from "vue";
import type { ProvideDrawer } from "./types";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<HeadingDrawerProps>(), {
  as: "h2",
});

const options = inject<ProvideDrawer>("options");

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    id: `drawer-heading-${options?.id}`,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
