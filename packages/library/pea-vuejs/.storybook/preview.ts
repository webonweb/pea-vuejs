import { setup } from '@storybook/vue3'
import '../src/assets/styles.scss'
import { action } from '@storybook/addon-actions'


setup((app) => {
  // Provide NuxtLink Stub
  app.component('NuxtLink', {
    props: {
      to: {
        type: String,
        default: '',
      },
    },
    methods: {
      log() {
        action('link target')(this.to)
      },
    },
    template: '<div @click="log()"><slot>NuxtLink</slot></div>',
  })
})

export const parameters = {
  layout: 'centered',
  controls: { expanded: true },
  actions: { argTypesRegex: '^on[A-Z].*' },
}