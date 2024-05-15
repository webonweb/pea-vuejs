import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pea VueJs",
  description: "UI library for non styled components.",
  appearance: false,

  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  srcDir: 'content',

  themeConfig: {
    editLink: {
      pattern: 'https://github.com/webonweb/pea-vuejs/edit/main/docs/content/:path',
      text: 'Suggest changes to this page',
    },


    logo: '/images/logo-pea.webp',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'v0.0.1 | Release Note ', link: 'https://github.com/webonweb/pea-vuejs/releases' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Pea VueJs?', link: '/guide/introduction' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Release', link: '/guide/releases' }
        ]
      },
      {
        text: 'Components',
        collapsed: false,
        items: [
          { text: 'Separator', link: '/components/separator' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/webonweb/pea-vuejs' }
    ],

    footer: {
      copyright: 'Copyright © 2024-present webonweb',
      message: 'Released under the MIT License.',
    },
  },

})
