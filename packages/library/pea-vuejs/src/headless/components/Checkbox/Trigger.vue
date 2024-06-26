<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    v-bind="bindings"
    @click.prevent="disabled ? null : (checked = !checked)"
    @keyup.enter="disabled ? null : (checked = !checked)"
  >
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface TriggerCheckboxProps extends PrimitiveProps {
  class?: string;
  disabled?: boolean;
}
</script>

<script lang="ts" setup>
import type { ModelRef } from "vue";
import { computed, inject } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<TriggerCheckboxProps>(), {
  as: "div",
});

const checked = inject<ModelRef<boolean>>("checked");

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    tabindex: "0",
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
