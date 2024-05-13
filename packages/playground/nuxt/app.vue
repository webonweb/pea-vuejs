<template>
  <div>
    Nuxt playground
    <Separator.Root class="w-full h-2 bg-pea-primary-100" />
  </div>
</template>

<script lang="ts" setup>
import { Separator } from "pea-vuejs/headless";

import { PeaTheme } from "pea-vuejs";

console.log(PeaTheme);
</script>
<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";
</style>
