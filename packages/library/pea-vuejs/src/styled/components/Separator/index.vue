<template>
  <Separator.Root :orientation :class="schemeClasses" />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { Separator } from "@/headless";

const props = withDefaults(
  defineProps<{
    type?: "solid" | "dashed";
    orientation?: "horizontal" | "vertical";
  }>(),
  {
    type: "solid",
    orientation: "horizontal",
  }
);

const variantClassMap: Record<
  "horizontal" | "vertical",
  Record<string, string>
> = {
  horizontal: {
    base: "border border-pea-surface-black/10 w-full border-b-0 border-r-0 border-l-0",
    dashed: "border-dashed",
    solid: "border-solid",
  },
  vertical: {
    base: "border-l border-l-pea-surface-black/10 self-stretch h-full w-[1px]",
    dashed: "border-dashed",
    solid: "border-solid",
  },
};

const schemeClasses = computed(() =>
  [
    variantClassMap[props.orientation].base,
    variantClassMap[props.orientation][props.type],
  ].join(" ")
);
</script>
