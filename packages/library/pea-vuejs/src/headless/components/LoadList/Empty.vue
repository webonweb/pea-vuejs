<template>
  <Primitive v-if="options?.empty.value" as="template" :as-child="asChild">
    <slot />
  </Primitive>
</template>
<script lang="ts" setup>
import { inject } from "vue";
import type { ProvideLoadList } from "./types";
import { Primitive } from "@pea-vuejs/primitive";

const options: ProvideLoadList | undefined = inject<ProvideLoadList>("options");
</script>
