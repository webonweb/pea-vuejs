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
          {
            text: 'What is Pea VueJs?', link: '/guide/introduction',
            items: [
              { text: 'Why should I use ?', link: '/guide/introduction/why-should-i-use' },
              { text: 'Why Pea ?', link: '/guide/introduction/why-pea' },
              { text: 'Comparison', link: '/guide/introduction/comparison-with-other-libraries' },
              { text: 'Two modules', link: '/guide/introduction/two-modules-one-library' }
            ]
          },
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
