<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings">
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface SharedSupProps extends PrimitiveProps {
  class?: string;
  for?: string;
  role?: string;
  ariaLive?: boolean;
}
</script>

<script lang="ts" setup>
import { computed } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<SharedSupProps>(), {
  as: "sup",
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    for: props.for || undefined,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  if (props.role) {
    bindings.role = props.role;
  }

  if (props.ariaLive) {
    bindings["aria-live"] = "polite";
  }

  return bindings;
});
</script>
