<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    @click.prevent="handleClick"
    v-bind="bindings"
    :class="{
      'cursor-default': bindings.disabled,
    }"
  >
    <slot
      :state="
        options &&
        options.current.value &&
        options.current.value.includes(key as string)
      "
    />
  </Primitive>
</template>
<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";

export interface BaseAccordionProps extends PrimitiveProps {}
</script>

<script lang="ts" setup>
import type { Ref } from "vue";
import { inject, computed } from "vue";
import type { ProvideAccordion } from "./types";
import { Primitive } from "@pea-vuejs/primitive";

withDefaults(defineProps<BaseAccordionProps>(), {
  as: "summary",
});

const options = inject<ProvideAccordion>("options");
const key = inject<string>("key");

const bindings = computed(() => {
  const bindings: Record<string, any> = {
    role: "button",
    disabled:
      options?.current.value && options?.type === "single"
        ? options.current.value.includes(key as string)
        : false,
    "aria-controls": `content-${key}`,
    "aria-expanded":
      options &&
      options.current.value &&
      options.current.value.includes(key as string),
  };

  return bindings;
});

const xorArray = (array: Ref<string[]>, value: string) => {
  const index = array.value.indexOf(value);
  if (index === -1) {
    array.value.push(value);
  } else {
    array.value = array.value.filter((item: string) => item !== value);
  }
};

const handleClick = () => {
  if (options?.type === "single") {
    options.current.value = [];
    options.current.value.push(key as string);
  } else {
    xorArray(options?.current as Ref<string[]>, key as string);
  }
};
</script>

<style lang="scss" scoped>
summary {
  list-style: none;
}
</style>
