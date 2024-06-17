<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings">
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface HeadingDialogProps extends PrimitiveProps {
  class?: string;
}
</script>

<script lang="ts" setup>
import { computed, inject } from "vue";
import type { ProvideDialog } from "./types";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<HeadingDialogProps>(), {
  as: "h3",
});

const options = inject<ProvideDialog>("options");

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    id: `dialog-heading-${options?.id}`,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
