<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings" :open="open">
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { ProvideCollapse } from "./types";
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface RootCollapseProps extends PrimitiveProps {
  id: string;
  open: boolean;
  class?: string;
}
</script>

<script lang="ts" setup>
import { provide, computed } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<RootCollapseProps>(), {
  as: "details",
});

const open = defineModel<boolean>("open", { required: true });

provide<ProvideCollapse>("options", {
  open,
  id: props.id,
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    "aria-expanded": open.value,
  };

  if (open.value) {
    bindings.open = true;
  }

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
