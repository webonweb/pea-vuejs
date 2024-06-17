<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings">
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface RootSwitchProps extends PrimitiveProps {
  class?: string;
  checked?: boolean;
}
</script>

<script lang="ts" setup>
import { computed, provide, type ModelRef, watch } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<RootSwitchProps>(), {
  as: "div",
});

const checked = defineModel<boolean>("checked", { required: true });
provide<ModelRef<boolean>>("checked", checked);

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    role: "switch",
    "aria-checked": checked.value,
    tabindex: "0",
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
