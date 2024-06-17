<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings">
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
import type { ProvideTooltip } from "./types";

export interface RootTooltipProps extends PrimitiveProps {
  class?: string;
  id: string;
  position?: "top" | "left" | "bottom" | "right";
}
</script>

<script lang="ts" setup>
import { computed, ref, provide } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<RootTooltipProps>(), {
  as: "div",
  position: "top",
});

const visible = ref<boolean>(false);

provide<ProvideTooltip>("options", {
  visible,
  position: props.position,
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    role: "tooltip",
    id: props.id,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
