<template>
  <Primitive v-if="options?.pending.value" as="template" :as-child="asChild">
    <slot />
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from "@pea-vuejs/primitive";
export interface PendingLoadListProps extends PrimitiveProps {}
</script>

<script lang="ts" setup>
import { inject } from "vue";
import type { ProvideLoadList } from "./types";
import { Primitive } from "@pea-vuejs/primitive";

const options: ProvideLoadList | undefined = inject<ProvideLoadList>("options");
defineProps<PendingLoadListProps>();
</script>
