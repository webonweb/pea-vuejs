<template>
  <Primitive
    :as="as"
    v-bind="bindings"
    :as-child="asChild"
    @input="
      (event: InputEvent) =>
        emit('on:change', (event.target as HTMLInputElement)?.value)
    "
  />
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface ElementInputProps extends PrimitiveProps {
  id: string;
  name: string;
  value: string;
  class?: string;
  type?: "text" | "textarea" | "password";
  invalid: boolean;
  describe?: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
}
</script>

<script lang="ts" setup>
import { computed } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<ElementInputProps>(), {
  as: "input",
  type: "text",
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    name: props.name,
    id: props.id,
    type: props.type,
    value: props.value,
    "aria-invalid": props.invalid.toString(),
    disabled: props.disabled,
    "data-disabled": props.disabled,
    "aria-required": props.required || false,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  if (props.placeholder) {
    bindings.placeholder = props.placeholder;
  }

  if (props.describe) {
    bindings["aria-describedby"] = props.describe;
  }

  if (props.required) {
    bindings.required = props.required;
  }

  return bindings;
});

const emit = defineEmits<{
  (e: "on:change", value: string | number): void;
}>();
</script>
