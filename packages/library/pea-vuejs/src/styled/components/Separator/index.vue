<template>
  <Separator.Root :orientation />
</template>
<script lang="ts" setup>
import { Separator } from "@/headless";
import { SeparatorOrientation } from "@/types";

withDefaults(
  defineProps<{
    orientation?: SeparatorOrientation;
  }>(),
  {
    orientation: SeparatorOrientation.HORIZONTAL,
  }
);
</script>
