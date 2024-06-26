import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CollapseComponent from './index.vue';
import { Shared } from '../../../headless'

describe('CollapseComponent', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(CollapseComponent, {
      props: {
        id: 'test-collapse',
        open: true,
      },
      slots: {
        heading: 'Collapse Heading',
        default: 'Collapse Content',
      },
    });

    expect(wrapper.find('summary').exists()).toBe(true);
    expect(wrapper.find('#test-collapse').exists()).toBe(true);
  });

  it('toggles content visibility when triggered', async () => {
    const wrapper = mount(CollapseComponent, {
      props: {
        id: 'test-collapse',
        open: false,
      },
      slots: {
        heading: 'Collapse Heading',
        default: 'Collapse Content',
      },
    });

    expect(wrapper.find('#test-collapse').exists()).toBe(false);
    await wrapper.find('.cursor-pointer').trigger('click');
    expect(wrapper.emitted('update:open')).toBeTruthy();
    expect(wrapper.find('#test-collapse').exists()).toBe(true);
  });

  it('does not toggle content visibility when disabled', async () => {
    const wrapper = mount(CollapseComponent, {
      props: {
        id: 'test-collapse',
        open: false,
        disabled: true,
      },
      slots: {
        heading: 'Collapse Heading',
        default: 'Collapse Content',
      },
    });

    expect(wrapper.find('#test-collapse').exists()).toBe(false);
    await wrapper.find('[aria-controls="test-collapse"]').trigger('click');
    expect(wrapper.emitted('update:open')).toBeFalsy();
    expect(wrapper.find('#test-collapse').exists()).toBe(false);
  });
});
