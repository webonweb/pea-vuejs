<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings">
    <slot />
    <input
      :id="id"
      :name="name"
      :checked="checked"
      class="hidden"
      type="checkbox"
    />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface RootCheckboxProps extends PrimitiveProps {
  class?: string;
  id: string;
  name: string;
  invalid: boolean;
  disabled?: boolean;
  required?: boolean;
}
</script>

<script lang="ts" setup>
import type { ModelRef } from "vue";
import { computed, provide } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<RootCheckboxProps>(), {
  as: "div",
});

const checked = defineModel<boolean>("checked", { required: true });
provide<ModelRef<boolean>>("checked", checked);

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    id: props.id,
    role: "checkbox",
    "aria-checked": checked.value,
    "aria-invalid": props.invalid.toString(),
    disabled: props.disabled,
    "data-disabled": props.disabled,
    "aria-required": props.required || false,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
