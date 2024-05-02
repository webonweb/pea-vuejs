<template>
  <div
    class="p-8 bg-surface-500 rounded-lg"
    :aria-labelledby="`cardTitle-${icon}`"
    role="complementary"
  >
    <h2
      :id="`cardTitle-${icon}`"
      class="text-surface-300 font-black text-sm tracking-moderate grid grid-cols-[repeat(2,max-content)] gap-x-2 items-center"
      :aria-describedby="`cardDescription-${icon}`"
    >
      <IconSvg
        :name="icon"
        class="w-4 h-4 text-primary-100"
        :alt="`Icon ${title}`"
      />
      {{ title }}
    </h2>
    <p
      :id="`cardDescription-${icon}`"
      class="text-sm text-surface-400 font-normal mt-6"
    >
      {{ description }}
    </p>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>
