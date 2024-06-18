<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    v-bind="bindings"
    @click.prevent="options!.visible.value = false"
  >
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface TriggerDrawerProps extends PrimitiveProps {
  class?: string;
}
</script>

<script lang="ts" setup>
import { computed, inject } from "vue";
import type { ProvideDrawer } from "./types";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<TriggerDrawerProps>(), {
  as: "div",
});

const options = inject<ProvideDrawer>("options");

const bindings = computed(() => {
  const bindings: Record<string, any> = {};

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
