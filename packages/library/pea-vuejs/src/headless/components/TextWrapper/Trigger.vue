<template>
  <Primitive
    v-if="options!.text.length >= options!.max"
    :as="as"
    :as-child="asChild"
    v-bind="bindings"
    @click.prevent="handleToogle"
  >
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface TriggerTextWrapperProps extends PrimitiveProps {
  class?: string;
  title?: string;
  ariaLabel?: string;
}
</script>

<script lang="ts" setup>
import { computed, inject } from "vue";
import { Primitive } from "@pea-vuejs/primitive";
import type { ProvideTextWrappper } from "./types";

const props = withDefaults(defineProps<TriggerTextWrapperProps>(), {
  as: "button",
});

const options = inject<ProvideTextWrappper>("options");

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    type: "button",
    "aria-label": props.ariaLabel || undefined,
    title: props.title || props.ariaLabel || undefined,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});

const handleToogle = () => {
  if (options && options.visible)
    options.visible.value = !options.visible.value;
};
</script>
