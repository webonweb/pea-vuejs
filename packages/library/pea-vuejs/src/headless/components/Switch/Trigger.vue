<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    v-bind="bindings"
    @click="checked = !checked"
  >
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface TriggerSwitchProps extends PrimitiveProps {
  class?: string;
  disabled?: boolean;
}
</script>

<script lang="ts" setup>
import { Primitive } from "@pea-vuejs/primitive";
import { computed, inject, type ModelRef } from "vue";

const props = withDefaults(defineProps<TriggerSwitchProps>(), {
  as: "button",
});

const checked = inject<ModelRef<boolean>>("checked");

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    type: "button",
    disabled: props.disabled,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
