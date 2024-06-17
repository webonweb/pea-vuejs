<template>
  <Primitive :as="as" :as-child="asChild" v-bind="bindings">
    <slot />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface RootLoadListProps extends PrimitiveProps {
  class?: string;
  page: number;
  pending?: boolean;
  empty?: boolean;
  total?: number;
  lazy?: boolean;
}
</script>

<script lang="ts" setup>
import type { ProvideLoadList } from "./types";
import { computed, provide, toRef } from "vue";
import { Primitive } from "@pea-vuejs/primitive";

const props = withDefaults(defineProps<RootLoadListProps>(), {
  as: "div",
  total: 0,
});

const showMore = computed(() => !props.empty && props.total >= props.page);
const isEmpty = computed(() => props.empty && !props.pending);
const isPending = computed(() => props.pending);

provide<ProvideLoadList>("options", {
  more: showMore,
  empty: isEmpty,
  pending: isPending,
  lazy: props.lazy,
});

const bindings = computed(() => {
  const bindings: Record<string, any> = {};

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});
</script>
