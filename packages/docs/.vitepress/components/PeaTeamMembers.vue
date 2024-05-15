<template>
  <a
    :href="member.links"
    class="grid grid-cols-[repeat(2,max-content)] gap-x-2 !no-underline"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="`User Profile ${member.name}`"
  >
    <img
      :src="member.avatar"
      class="rounded-full"
      width="44"
      height="44"
      :alt="member.name"
    />
    <div aria-hidden="true">
      <strong class="font-black text-primary-100 text-sm tracking-moderate">
        {{ member.name }}
      </strong>
      <p class="font-normal text-sm text-surface-400 !m-0 p-0">
        {{ member.nick }}
      </p>
    </div>
  </a>
</template>
<script lang="ts" setup>
import type { TeamMember } from "../types";

defineProps<{
  member: TeamMember;
}>();
</script>
