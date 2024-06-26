import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Badge from './index.vue';

describe('Badge.vue', () => {
  it('renders the default slot content', () => {
    const wrapper = mount(Badge, {
      props: {
        id: 'test-badge',
      },
      slots: {
        default: '<span>Badge Content</span>',
      },
    });

    expect(wrapper.find('span').text()).toBe('Badge Content');
  });

  it('renders the value correctly in the badge', () => {
    const wrapper = mount(Badge, {
      props: {
        id: 'test-badge',
        value: 5,
      },
    });

    const sup = wrapper.findComponent({ name: 'Sup' });
    expect(sup.exists()).toBe(true);
    expect(sup.text()).toBe('5');
  });

  it('applies the correct classes based on the type prop', () => {
    const wrapper = mount(Badge, {
      props: {
        id: 'test-badge',
        type: 'success',
        value: 5,
      },
    });

    const sup = wrapper.findComponent({ name: 'Sup' });
    expect(sup.classes()).toContain('bg-pea-success-100');
  });

  it('applies the default type classes when no type is provided', () => {
    const wrapper = mount(Badge, {
      props: {
        id: 'test-badge',
        value: 5,
      },
    });

    const sup = wrapper.findComponent({ name: 'Sup' });
    expect(sup.classes()).toContain('bg-pea-default-100');
  });
});
