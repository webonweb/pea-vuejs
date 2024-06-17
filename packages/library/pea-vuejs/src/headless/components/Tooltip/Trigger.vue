<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    v-bind="bindings"
    @mouseover="toogleState(true)"
    @mouseleave="toogleState(false)"
  >
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface TriggerTooltipProps extends PrimitiveProps {
  class?: string;
}
</script>

<script lang="ts" setup>
import { computed, inject } from "vue";
import type { ProvideTooltip } from "./types";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<TriggerTooltipProps>(), {
  as: "div",
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    ref: "trigger",
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});

const options = inject<ProvideTooltip>("options");

const toogleState = (state: boolean) => {
  options.visible.value = state;
};
</script>
