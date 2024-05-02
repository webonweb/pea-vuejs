<template>
  <NuxtLink
    :to="url"
    class="grid grid-cols-[repeat(2,max-content)] gap-x-2"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="User Profile {{ name }}"
  >
    <NuxtImg
      :src="image"
      class="rounded-full"
      width="44"
      height="44"
      :alt="name"
    />
    <div aria-hidden="true">
      <strong class="font-black text-primary-100 text-sm tracking-moderate">
        {{ name }}
      </strong>
      <p class="font-normal text-sm text-surface-400">{{ pseudo }}</p>
    </div>
  </NuxtLink>
</template>
<script lang="ts" setup>
defineProps<{
  url: string;
  image: string;
  name: string;
  pseudo: string;
}>();
</script>
