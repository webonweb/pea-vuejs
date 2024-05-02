<template>
  <section class="grid md:grid-cols-12 grid-cols-1 pt-8">
    <div class="md:col-span-8 order-2 md:order-1 text-center md:text-left">
      <h1
        class="font-black text-primary-100 text-5xl bg-gradient-to-b sm:text-8xl md:text-8xl from-primary-100 to-primary-200 text-transparent bg-clip-text from-40% to-60%"
        aria-label="Pea VueJs, UI components for Vue.js"
      >
        Pea VueJs
      </h1>
      <h2
        class="text-surface-300 font-bold mt-5 text-2xl sm:text-5xl md:text-5xl"
      >
        UI components for Vue.js
      </h2>
      <p
        class="mt-2 sm:mt-10 md:mt-14 font-normal text-xl sm:text-3xl md:text-3xl text-surface-400"
      >
        Small UI library for non styled components.
      </p>
      <div
        class="mt-6 grid grid-cols-[repeat(2,max-content)] gap-x-2 justify-center md:justify-start"
        aria-label="Primary Actions"
      >
        <NuxtLink
          to="/get-started"
          class="py-3 px-6 block rounded-full font-normal text-sm text-surface-600 bg-primary-100 w-fit cursor-pointer"
          aria-label="Start using Pea VueJs"
        >
          Get Started
        </NuxtLink>
        <NuxtLink
          to="/demo"
          class="py-3 px-6 block rounded-full font-normal text-sm text-surface-400 bg-surface-500 w-fit cursor-pointer"
          aria-label="See Pea VueJs demos"
        >
          Demo
        </NuxtLink>
      </div>
    </div>
    <aside class="md:col-span-4 order-1 md:order-2" aria-label="Pea VueJs logo">
      <NuxtImg
        src="/images/logo.png"
        width="349"
        height="315"
        class="w-full max-w-[300px] md:max-w-none m-auto"
        alt="Pea VueJs logo"
      />
    </aside>
  </section>
  <section class="py-6 md:py-24 grid sm:grid-cols-8 md:grid-cols-12 gap-4">
    <TraitCard
      icon="idea"
      class="sm:col-span-4 md:col-span-4"
      title="Intuitive"
      description="Very easy access to components which you can style as you like."
    />
    <TraitCard
      icon="dissolving"
      class="sm:col-span-4 md:col-span-4"
      title="Two modules"
      description="You can download components already styled if you use Tailwind CSS as well as the component primitives themselves."
    />
    <TraitCard
      icon="components"
      class="sm:col-span-4 md:col-span-4"
      title="Many components"
      description="You have access to a very large number of components that are not available in most libraries."
    />
    <TraitCard
      icon="package"
      class="sm:col-span-4 md:col-span-4"
      title="Extremely light"
      description="Very light package weight, everything is downloaded on demand."
    />
    <TraitCard
      icon="package"
      class="sm:col-span-4 md:col-span-4"
      title="You get what you need"
      description="You can download components and use them at any time."
    />
    <TraitCard
      icon="shield"
      class="sm:col-span-4 md:col-span-4"
      title="Type safe"
      description="All types are downloaded from a single file."
    />
  </section>
  <section
    class="flex flex-col justify-center items-center"
    aria-labelledby="teamSection"
  >
    <h2 id="teamSection" class="text-surface-400 text-lg mb-8">
      Meet the Team
    </h2>
    <div
      class="grid grid-cols-1 md:grid-cols-[repeat(3,max-content)] items-center gap-x-5 gap-y-6"
      aria-label="Team members"
    >
      <TeamUser
        url="https://github.com/voil"
        image="/images/voil.jpeg"
        name="Przemysław Drzewicki"
        pseudo="voil"
      />
      <div class="text-surface-400 text-4xl hidden md:block">/</div>
      <div
        class="text-surface-400 border-t border-t-surface-400/20 block md:hidden w-2/3 m-auto"
        role="separator"
      />
      <TeamUser
        url="https://github.com/ddosdor"
        image="/images/ddosdor.png"
        name="Sebastian Drzewicki"
        pseudo="ddosdor"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import { useSeoMeta } from "#app";

useSeoMeta({
  title: "Pea VueJS | UI library for non styled components",
  ogTitle: "Pea VueJS | UI library for non styled components",
  description: "Small UI library for non styled components.",
  ogDescription: "Small UI library for non styled components.",
  ogImage: "",
  twitterCard: "summary_large_image",
});
</script>
