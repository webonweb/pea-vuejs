<template>
  <section class="w-full m-auto p-3">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Content>
        <h3 class="text-2xl font-semibold mb-4">Separator</h3>
        <Separator />
      </Content>
      <Content>2</Content>
      <Content>3</Content>
      <Content>4</Content>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Content from '@/components/Content.vue'

import { Separator } from 'pea-vuejs'
</script>
