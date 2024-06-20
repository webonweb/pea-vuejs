<template>
  <Accordion.Root :type="type" :open-keys="openKeys" class="w-full">
    <slot />
  </Accordion.Root>
</template>
<script lang="ts" setup>
import { Accordion } from "@/headless";

withDefaults(
  defineProps<{
    type?: "single" | "multi";
    openKeys?: string[];
  }>(),
  {
    openKeys: () => [],
    type: "single",
  }
);
</script>
