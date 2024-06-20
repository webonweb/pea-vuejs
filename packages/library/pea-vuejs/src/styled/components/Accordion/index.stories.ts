import type { Meta, StoryObj } from '@storybook/vue3';

import { ref, watch } from 'vue';
import hljs from 'highlight.js';
import AcordionComponent from './index.vue'
import AcordionItemComponent from './Item.vue'
import CodeEditor from 'simple-code-editor';


const meta: Meta<typeof AcordionComponent> = {
  title: 'Acordion',
  component: AcordionComponent,
  tags: ['autodocs'],
  argTypes: {
    openKeys: { description: 'Parameter to set open default accordion item' },
    type: { description: 'Parameter to set the type accodion', options: ["single", "multi"] },
  },
};

export default meta;

type Story = StoryObj<typeof AcordionComponent>;

export const Acordion: Story = {
  render: (args) => ({
    components: { AcordionComponent, CodeEditor, AcordionItemComponent },
    setup() {

      return {
        args,
      };
    },
    template: `
    <AcordionComponent>
      <AcordionItemComponent index-key="option1">
        <template #heading>Option 1</template>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at odio id nisl maximus rutrum. Integer lacinia luctus egestas. Nam feugiat id justo nec porta. Ut venenatis sed erat id bibendum.
      </AcordionItemComponent>
      <AcordionItemComponent index-key="option2">
        <template #heading>Option 2</template>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at odio id nisl maximus rutrum. Integer lacinia luctus egestas. Nam feugiat id justo nec porta. Ut venenatis sed erat id bibendum.
      </AcordionItemComponent>
    </AcordionComponent>
  `,
  }),
  args: {},
};
