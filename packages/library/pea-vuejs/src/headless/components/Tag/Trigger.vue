<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    v-bind="bindings"
    @click.prevent="emit('on:click')"
  >
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface TriggerTagProps extends PrimitiveProps {
  class?: string;
  disabled?: boolean;
}
</script>

<script lang="ts" setup>
import { computed } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<TriggerTagProps>(), {
  as: "button",
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    type: "button",
    "aria-label": "remove element",
    disabled: props.disabled || undefined,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});

const emit = defineEmits<{
  (e: "on:click"): void;
}>();
</script>
