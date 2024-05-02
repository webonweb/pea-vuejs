<template>
  <header
    class="max-w-screen-md w-full m-auto px-4 md:px-0 h-16 flex items-center justify-between"
    aria-label="Main header"
  >
    <NuxtLink
      to="/"
      aria-label="Go to home page"
      class="grid grid-cols-[repeat(2,max-content)] gap-x-2 items-center tracking-moderate"
    >
      <NuxtImg
        src="/images/logo.png"
        width="40"
        height="40"
        alt="Logo Pea VueJs"
        aria-hidden="true"
      />
      <strong
        class="text-sm sm:text-base md:text-base text-surface-400 font-bold"
        >Pea VueJs</strong
      >
    </NuxtLink>

    <div
      class="grid grid-cols-[repeat(2,max-content)] gap-x-2 sm:gap-x-5 md:gap-x-5"
      aria-label="Navigation links"
    >
      <NuxtLink
        to="/overview/introduction"
        class="text-sm sm:text-base md:text-base text-surface-400 font-normal"
        aria-label="Documentation"
      >
        Docs
      </NuxtLink>
      <NuxtLink
        to="https://github.com/webonweb/pea-vuejs/releases"
        class="text-sm sm:text-base md:text-base text-surface-400 font-normal"
        aria-label="Release Notes wersji 0.0.1 Pea VueJs"
        target="_blank"
        rel="noopener noreferrer"
      >
        v0.0.1 | Release Note
      </NuxtLink>
    </div>
  </header>
</template>
