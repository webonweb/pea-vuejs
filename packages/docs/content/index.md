---
layout: home

title: Pea VueJs
titleTemplate: Small UI library for non styled components.

hero:
  name: Pea VueJs
  text: UI components for Vue.js
  tagline: Small UI library for non styled components.
  image:
    src: /images/logo-pea.webp
    alt: Pea VueJs
  actions:
    - theme: brand
      text: Get Started
      link: /docs/introduction
    - theme: alt
      text: Demo
      link: https://stackblitz.com/github/piniajs/example-vue-3-vite

features:
  - title: ✏️ Intuitive
    details: Very easy access to components which you can style as you like.
  - title: 🆚 Two modules
    details: You can download components already styled if you use Tailwind CSS as well as the component primitives themselves.
  - title: 🚚 Many components
    details: You have access to a very large number of components that are not available in most libraries.
  - title: ⚡Extremely light
    details: Very light package weight, everything is downloaded on demand.
  - title: 🎉 You get what you need
    details: You can download components and use them at any time.
  - title: ✅ Type safe
    details: All types are downloaded from a single file.
---

<script lang="ts" setup>
import type { TeamMember } from '.././.vitepress/types'
import PeaTeamMembers from '.././.vitepress/components/PeaTeamMembers.vue'

const members: TeamMember[] = [
  {
    uid: '1bc21ba6-9f0f-4632-a902-159b7a2b26ea',
    avatar: '/images/voil.webp',
    name: 'Przemysław Drzewicki',
    nick: 'voil',
    links: 'https://github.com/voil'
  },
  {
    uid: '05c57d02-8498-49f3-9b43-98dce04fe258',
    avatar: '/images/ddosdor.webp',
    name: 'Sebastian Drzewicki',
    nick: 'ddosdor',
    links: 'https://github.com/ddosdor'
  },
]
</script>

<section
  class="flex flex-col justify-center items-center"
  aria-labelledby="teamSection"
>
  <h2 id="teamSection" class="text-surface-400 text-lg !mb-10">
    Meet the Team
  </h2>
  <div
    class="grid grid-cols-1 md:grid-cols-[repeat(3,max-content)] items-center gap-x-5 gap-y-6"
    aria-label="Team members"
  >
    <PeaTeamMembers :key="members[0].uid" :member="members[0]"/>
    <div class="text-surface-400 text-4xl hidden md:block">/</div>
    <div
      class="text-surface-400 border-t border-t-surface-400/20 block md:hidden w-2/3 m-auto"
      role="separator"
    />
    <PeaTeamMembers :key="members[1].uid" :member="members[1]"/>
  </div>
</section>
