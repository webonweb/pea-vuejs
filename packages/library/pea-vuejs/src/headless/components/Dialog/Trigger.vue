<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    v-bind="bindings"
    @click.prevent="options!.visible.value = false"
  >
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface TriggerDialogProps extends PrimitiveProps {
  class?: string;
}
</script>

<script lang="ts" setup>
import { computed, inject } from "vue";
import type { ProvideDialog } from "./types";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<TriggerDialogProps>(), {
  as: "button",
});

const options = inject<ProvideDialog>("options");

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    type: "button",
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
