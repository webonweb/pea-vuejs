import type { StorybookConfig } from '@storybook/vue3-vite'
import { resolve } from 'node:path'
import GlobPlugin from "vite-plugin-glob";
import svgLoader from "vite-svg-loader";
import { mergeConfig } from 'vite'

const projectRootDir = resolve(__dirname)

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
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [svgLoader(), GlobPlugin({
        restoreQueryExtension: true
      })],
      alias: {
        ...config.resolve?.alias,
        '@/assets': resolve(projectRootDir, '../src/assets/*')
      }
    });
  },
}
export default config