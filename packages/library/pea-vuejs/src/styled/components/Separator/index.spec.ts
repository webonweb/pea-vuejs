import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Separator from './index.vue';

describe('Separator Component', () => {
  it('renders with default orientation as horizontal', () => {
    const wrapper = mount(Separator);

    expect(wrapper.props().orientation).toBe('horizontal');
    expect(wrapper.findComponent({ name: 'Root' }).props('orientation')).toBe('horizontal');
  });

  it('renders with default type as solid', () => {
    const wrapper = mount(Separator);

    expect(wrapper.props().type).toBe('solid');
    expect(wrapper.findComponent({ name: 'Root' }).props('type')).toBe('solid');
  });

  it('renders with vertical orientation when passed as a prop', () => {
    const wrapper = mount(Separator, {
      props: {
        orientation: 'vertical'
      }
    });
    expect(wrapper.props().orientation).toBe('vertical');
    expect(wrapper.findComponent({ name: 'Root' }).props('orientation')).toBe('vertical');
  });

  it('renders with dashed type when passed as a prop', () => {
    const wrapper = mount(Separator, {
      props: {
        type: 'dashed'
      }
    });
    expect(wrapper.props().type).toBe('dashed');
    expect(wrapper.findComponent({ name: 'Root' }).props('type')).toBe('dashed');
  });
});