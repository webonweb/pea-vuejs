<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    v-bind="bindings"
    @click.prevent="options!.open.value = !options?.open.value"
  >
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface TriggerCollapseProps extends PrimitiveProps {
  class?: string;
}
</script>

<script lang="ts" setup>
import { inject, computed } from "vue";
import type { ProvideCollapse } from "./types";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<TriggerCollapseProps>(), {
  as: "summary",
});

const options = inject<ProvideCollapse>("options");

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    "aria-controls": options?.id,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>

<style lang="scss" scoped>
summary {
  list-style: none !important;
}
</style>
