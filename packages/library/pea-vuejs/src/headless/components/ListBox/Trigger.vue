<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    v-bind="bindings"
    @click.prevent="handleToogleItem"
  >
    <slot :active="options?.selected.value.includes(item.key)" />
  </Primitive>
</template>
<script lang="ts">
import type { ListBoxItem } from "./types";
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface RootListBoxProps extends PrimitiveProps {
  class?: string;
  item: ListBoxItem;
  disbaled?: boolean;
}
</script>

<script lang="ts" setup>
import { computed, inject } from "vue";
import type { ProvideListbox } from "./types";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<RootListBoxProps>(), {
  as: "li",
});

const options = inject<ProvideListbox>("options");

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    "aria-label": props.item.label,
  };

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});

const handleToogleItem = () => {
  if (props.disbaled) {
    return;
  }

  const index = options?.selected.value.indexOf(props.item.key);
  if (index !== -1) {
    options?.selected.value.splice(index ?? 0, 1);
  } else {
    options?.selected.value.push(props.item.key);
  }
};
</script>
