import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  addons: [{
    name: '@storybook/addon-essentials',
    options: {
      docs: false,
    },
  }, '@storybook/addon-interactions', '@storybook/addon-links', {
    name: '@storybook/addon-docs',
    options: {},
  }],
  docs: {
    autodocs: false,
  },
}
export default config