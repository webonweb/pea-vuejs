<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    v-bind="bindings"
    @click="handleClick"
  >
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface TriggerTabsProps extends PrimitiveProps {
  class?: string;
  id: string;
  disbaled?: boolean;
}
</script>

<script lang="ts" setup>
import { computed, inject } from "vue";
import type { ProvideTabs } from "./types";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<TriggerTabsProps>(), {
  as: "button",
});

const options = inject<ProvideTabs>("options");

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    id: props.id,
    role: "tab",
    disbaled: props.disbaled,
    "aria-selected": options?.active?.value === props.id,
    "aria-controls": `section-${props.id}`,
    "data-disbaled": props.disbaled,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});

const handleClick = () => {
  if (props.disbaled || options?.active?.value === props.id) {
    return;
  }

  if (options && options.active && options.next) {
    if (options && options?.isolate) {
      options.active.value = props.id;
    } else {
      options.active.value = undefined;
      options.next.value = props.id;
    }
  }
};
</script>
