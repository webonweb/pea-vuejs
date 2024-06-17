<template>
  <Primitive
    v-if="options?.more.value"
    :as="options.lazy ? 'div' : 'button'"
    :as-child="asChild"
    v-bind="bindings"
    @click.prevent="options.lazy ? null : handleChangePage"
  >
    <slot v-if="!options.lazy" />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface TriggerLoadListProps extends PrimitiveProps {
  class?: string;
  ariaLabel?: string;
}
</script>

<script lang="ts" setup>
import type { ProvideLoadList } from "./types";
import { Primitive } from "@pea-vuejs/primitive";
import { computed, defineEmits, inject } from "vue";

const options: ProvideLoadList | undefined = inject<ProvideLoadList>("options");
const props = withDefaults(defineProps<TriggerLoadListProps>(), {});

const bindings = computed(() => {
  const bindings: Record<string, any> = {};

  if (props.class) {
    bindings.class = props.class;
  }

  return bindings;
});

const emit = defineEmits<{
  (e: "change:page"): void;
}>();

const handleChangePage = () => {
  if (options?.more.value && !options.pending.value) {
    emit("change:page");
  }
};
</script>
