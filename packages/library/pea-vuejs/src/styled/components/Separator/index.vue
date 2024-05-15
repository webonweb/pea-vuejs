<template>
  <Separator.Root :orientation />
</template>
<script lang="ts" setup>
import { Separator } from "@/headless";

withDefaults(
  defineProps<{
    orientation?: "horizontal" | "vertical";
  }>(),
  {
    orientation: "horizontal",
  }
);
</script>
