<template>
  <Accordion.Item
    :index-key="indexKey"
    class="border-t border-t-pea-surface-black/10 py-4 w-full"
  >
    <Accordion.Trigger
      class="grid grid-flow-col grid-cols-[1fr_max-content] items-center gap-x-2 w-full"
    >
      <template #default="{ state }">
        <Accordion.Heading class="font-medium">
          <slot name="heading" />
        </Accordion.Heading>
        <Shared.Icon :name="state ? 'minus' : 'plus'" class="w-4 h-4" />
      </template>
    </Accordion.Trigger>
    <Accordion.Content class="text-sm font-normal pt-2">
      <slot />
    </Accordion.Content>
  </Accordion.Item>
</template>
<script lang="ts" setup>
import { Accordion, Shared } from "@/headless";

defineProps<{
  indexKey: string;
}>();
</script>
