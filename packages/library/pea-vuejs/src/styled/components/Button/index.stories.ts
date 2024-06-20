import type { Meta, StoryObj } from '@storybook/vue3';

import { ref, watch } from 'vue';
import hljs from 'highlight.js';
import ButtonComponent from './index.vue'
import CodeEditor from 'simple-code-editor';


const meta: Meta<typeof ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    icon: { description: 'Parameter to set name of icon', type: 'string' },
    type: { description: 'Parameter to set the button type', options: ["default", "success", "error", "info", "warning", "primary", "secondary"] },
    size: { description: 'Parameter to set the button size', options: ["small", "medium", "large"] },
    positionIcon: { description: 'Parameter to set the position icon', options: ["after", "before"] },
    disabled: { description: 'Parameter to set disabled button', type: 'boolean' },
    title: { description: 'Parameter to set title for button' },
    to: { description: 'Parameter to set redirect' },
    ariaLabel: { description: 'Parameter to set aria label' },
    variant: { description: 'Parameter to set variant', options: ["button", "link"] },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {
  render: (args) => ({
    components: { ButtonComponent, CodeEditor },
    setup() {

      const apiReference = ref()
      const codeEditorRef = ref()
      const propsCode: Record<string, Record<string, string | boolean>[]> = {
        typescript: [
          {
            name: 'icon',
            default: '---',
            type: 'string',
            description: 'Parameter to set name of icon',
            required: false,
          },
          {
            name: 'type',
            default: 'primary',
            type: '"default", "success", "error", "info", "warning", "primary", "secondary"',
            description: 'Parameter to set the button type',
            required: false,
          },
          {
            name: 'size',
            default: 'medium',
            type: '"small", "medium", "large"',
            description: 'Parameter to set the button size',
            required: false,
          },
          {
            name: 'variant',
            default: 'button',
            type: '"link", "button"',
            description: 'Parameter to set variant',
            required: false,
          },
          {
            name: 'position-icon',
            default: '---',
            type: '"after", "before"',
            description: 'Parameter to set the position icon',
            required: false,
          },
          {
            name: 'disabled',
            default: 'false',
            type: 'boolean',
            description: 'Parameter to set disabled button',
            required: false,
          },
          {
            name: 'title',
            default: '---',
            type: 'string',
            description: 'Parameter to set title for button',
            required: false,
          },
          {
            name: 'to',
            default: '---',
            type: 'string',
            description: 'Parameter to set redirect',
            required: false,
          },
          {
            name: 'aria-label',
            default: '---',
            type: 'string',
            description: 'Parameter to set aria label',
            required: false,
          },
        ],
        javascript: [],
      }

      const codeMap: Record<string, string> = {
        typescript: `<template>
 <Button :type :size :position-icon="positionIcon" :icon :variant :disabled :aria-label="ariaLabel" :to :title>Lorem ipsum</Button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Button } from "pea-vuejs"

const to = ref('/page-site')
const ariaLabel = ref('button-aria')
const title = ref('button-title')
const icon = ref('search')
const size = ref('medium')
const type = ref('primary')
const variant = ref('button')
const disabled = ref(false)
const positionIcon = ref('before')
</script>`,
        javascript: `<template>
  <Button.Root
    :disabled="disabled"
    :aria-label="ariaLabel"
    :to="to"
    :title="title"
  >
    <Shared.Icon
      :name="icon"
    />
    Lorem ipsum
  </Button.Root>
</template>
  
<script lang="ts" setup>
import { ref } from "vue" 
import { Btton, Shared } from "pea-vuejs/headless";

const to = ref('/page-site')
const ariaLabel = ref('button-aria')
const title = ref('button-title')
const icon = ref('search')
const disabled = ref(false)
</script>`
      }

      const instalationMap: Record<string, string> = {
        npm: 'npm install pea-vuejs',
        pnpm: 'pnpm install pea-vuejs',
        yarn: 'yarn add pea-vuejs',
        bun: 'bun add pea-vuejs'
      }

      const code = ref(codeMap.typescript)
      const instalation = ref(instalationMap.npm)

      const handleChangeLang = (lang: string) => {
        codeEditorRef.value.$refs.code.removeAttribute('data-highlighted');
        code.value = codeMap[lang]

        apiReference.value = propsCode[lang].map(item => `
          <tr class="bg-white border-b  hover:bg-gray-50 ">
              <td class="px-6 py-4">
                  ${item.name}
              </td>
              <td class="px-6 py-4">
                ${item.default}
              </td>
              <td class="px-6 py-4">
                ${item.type}
              </td>
              <td class="px-6 py-4">
                ${item.description}
              </td>
              <td class="px-6 py-4">
                ${item.required}
              </td>
          </tr>
        `).join('')
      }

      const handleChangeInstalationLang = (lang: string) => {
        codeEditorRef.value.$refs.code.removeAttribute('data-highlighted');
        instalation.value = instalationMap[lang]
      }


      watch(() => [args.type, args.size, args.disabled, args.icon, args.positionIcon, code.value], () => {
        codeEditorRef.value.$refs.code.removeAttribute('data-highlighted');
      })

      return {
        args,
        code,
        apiReference,
        instalation,
        codeEditorRef,
        handleChangeLang,
        handleChangeInstalationLang
      };
    },
    template: `
        <div class="w-[800px] pb-10 overflow-visible">
      <div class="grid grid-rows-[repeat(2,max-content)] gap-y-4">
        <h3 class="text-5xl font-bold">Button</h3>
        <p class="text-base text-black/60">The Button component is an interactive user interface element that allows a specific action to be performed when clicked by the user. It can contain text, an icon, or both, and its style and functionality can be customized using CSS and JavaScript properties.</p>
      </div>
      <br/>
      <div class="grid grid-rows-[repeat(2,max-content)] gap-y-4">
        <strong class="text-2xl font-bold"># Example of component usage:</strong>
        <div class="p-8 h-40 bg-black/5 rounded-t-lg border border-black/5 relative flex items-center justify-center">
          <ButtonComponent :type="args.type" :size="args.size" :position-icon="args.positionIcon" :icon="args.icon" :variant="args.variant" :disabled="args.disabled" :aria-label="args.ariaLabel" :to="args.to" :title="args.title">Lorem ipsum</ButtonComponent>
        </div>
        <CodeEditor ref="codeEditorRef" v-model="code" :read-only="true" :languages="[['typescript', 'Styled'], ['javascript', 'Headless']]" class="!w-[800px] relative -top-[30px]" theme="base16-bespin" @lang="handleChangeLang"/>
      </div>
      <SeparatorComponent /><br/>
      <div class="grid grid-rows-[repeat(2,max-content)] gap-y-4 mb-10">
        <div>
          <strong class="text-2xl font-bold mb-3 block"># Installation:</strong>
          <p class="text-base text-black/60">Install the component from your command line.</p>
        </div>
        <CodeEditor v-model="instalation" :read-only="true" :languages="[['npm', 'npm'], ['pnpm', 'pnpm'], ['yarn', 'yarn'], ['bun', 'bun']]" class="!w-[800px]" theme="base16-bespin" @lang="handleChangeInstalationLang"/>
      </div>
      <SeparatorComponent /><br/>
      <div class="grid grid-rows-[repeat(2,max-content)] gap-y-4">
        <div>
          <strong class="text-2xl font-bold mb-3 block"># API Reference:</strong>
          <p class="text-base text-black/60">This section provides a detailed overview of the properties available in the component. It serves as a guide for developers on how to utilize and configure the component within their applications.</p>
        </div>
        <div>
        <br/>
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-xs text-gray-700 bg-gray-100 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Prop
                </th>
                <th scope="col" class="px-6 py-3">
                  Default
                </th>
                <th scope="col" class="px-6 py-3">
                  Type
                </th>
                <th scope="col" class="px-6 py-3">
                  Description
                </th>
                <th scope="col" class="px-6 py-3">
                  Required
                </th>
              </tr>
            </thead>
            <tbody v-html="apiReference">
            </tbody>
          </table>
        </div>
      </div>
      <br/>
      <div class="grid grid-rows-[repeat(2,max-content)] gap-y-4">
        <div>
          <strong class="text-2xl mb-3 font-bold block"># Accessibility:</strong>
          <p class="text-base text-black/60">
Ensuring accessibility for the button component involves providing clear and descriptive labels using the aria-label or aria-labelledby attributes, making it easily navigable via keyboard with proper focus states. Additionally, it should have sufficient color contrast and provide feedback to assistive technologies to inform users about its state and actions.</p>
        </div>
      </div>
    </div>
  `,
  }),
  args: {
    icon: 'search',
    type: 'default',
    size: 'medium',
    disabled: false,
    positionIcon: 'before',
    title: 'Lorem ipsum title',
    to: '/redirect',
    variant: 'button',
    ariaLabel: 'Lorem ipsum aria label'
  },
};
