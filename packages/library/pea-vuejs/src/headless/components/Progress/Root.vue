<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings">
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface RootProgressProps extends PrimitiveProps {}
</script>

<script lang="ts" setup>
import { Primitive } from "@pea-vuejs/primitive";

withDefaults(defineProps<RootProgressProps>(), {
  as: "div",
});

const bindings: Record<string, any> = {};
</script>
