<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings">
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface RootCardProps extends PrimitiveProps {
  class?: string;
  id: string;
  type?: "div" | "section" | "article";
}
</script>

<script lang="ts" setup>
import { computed, provide } from "vue";
import type { ProvideCard } from "./types";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<RootCardProps>(), {
  as: "div",
});

provide<ProvideCard>("options", {
  id: props.id,
  type: props.type,
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    id: props.id,
    as: props.type,
    role: "card",
    "aria-labelledby": `card-header-${props.id}`,
    "aria-describedby": `card-content-${props.id}`,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
