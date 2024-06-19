import type { Meta, StoryObj } from '@storybook/vue3';

import { ref, watch } from 'vue';
import hljs from 'highlight.js';
import AvatarComponent from './index.vue'
import CodeEditor from 'simple-code-editor';


const meta: Meta<typeof AvatarComponent> = {
  title: 'Avatar',
  component: AvatarComponent,
  tags: ['autodocs'],
  argTypes: {
    size: { description: 'Parameter to set the size', options: ["small", "medium", "large"] },
    type: { description: 'Parameter to set the type', options: ["square", "circle"] },
    image: { description: 'Parameter to set image', control: "object" },
  },
};

export default meta;

type Story = StoryObj<typeof AvatarComponent>;

export const Avatar: Story = {
  render: (args) => ({
    components: { AvatarComponent, CodeEditor },
    setup() {
      const apiReference = ref()
      const codeEditorRef = ref()
      const propsCode: Record<string, Record<string, string | boolean>[]> = {
        typescript: [
          {
            name: 'size',
            default: 'medium',
            type: 'string',
            description: 'Parameter to set the size',
            required: false,
          },
          {
            name: 'type',
            default: 'circle',
            type: '"square", "circle"',
            description: 'Parameter to set the type',
            required: false,
          },
          {
            name: 'image',
            default: `
            {
              src?: string | null
              alt: string
              title?: string
            }
            `,
            type: 'AvatarOption',
            description: 'Parameter to set image',
            required: true,
          }
        ],
        javascript: [],
      }

      const codeMap: Record<string, string> = {
        typescript: `<template>
  <Avatar :type :size :image />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Avatar } from "pea-vuejs"

const size = ref('medium')
const type = ref('circle')

const image = ref({
  src: ''
  alt: 'Lorem ipsum
  title: 'Lorem ipsum'
})

</script>`,
        javascript: `<template>
  <Avatar.Root>
    <Shared.Image
      :image="{
        ...image,
        placeholder: 'Url to placeolder image',
      }"
    />
    <Avatar.Caption>
      {{ image?.title || image?.alt }}
    </Avatar.Caption>
  </Avatar.Root>
</template>
  
<script lang="ts" setup>
import { ref } from "vue" 
import { Avatar, Shared } from "pea-vuejs/headless";

const image = ref({
  src: ''
  alt: 'Lorem ipsum
  title: 'Lorem ipsum'
})
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


      watch(() => [args.type, args.size, code.value], () => {
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
        <h3 class="text-5xl font-bold">Avatar</h3>
        <p class="text-base text-black/60">The Avatar component in software is used to represent a user through an image, icon, or initials, facilitating identification in user interfaces such as social media applications, user management systems, or messaging platforms. The Avatar often includes customization options, allowing users to change the appearance and tailor the representation to their preferences.</p>
      </div>
      <br/>
      <div class="grid grid-rows-[repeat(2,max-content)] gap-y-4">
        <strong class="text-2xl font-bold"># Example of component usage:</strong>
        <div class="p-8 h-40 bg-black/5 rounded-t-lg border border-black/5 relative flex items-center justify-center">
          <AvatarComponent :image="{ alt: 'Lorem ipsum', title:'title' }" :size="args.size" :type="args.type" caption/>
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
          <p class="text-base text-black/60">Accessibility for the Avatar component ensures that users with disabilities can interact with and understand the avatar representation through alternative text descriptions and keyboard navigation. This includes providing meaningful alt text for images, ensuring avatars are focusable, and integrating with screen readers to convey necessary information about the user's identity.</p>
        </div>
        <div>
          For more info go to -> <a class=" text-blue-600" href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/figure_role" target="__blank">avatar</a> 
        </div>
      </div>
    </div>
  `,
  }),
  args: {
    type: 'square',
    size: 'medium',
  },
};
