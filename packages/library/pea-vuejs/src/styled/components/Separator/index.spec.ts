import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Separator from './index.vue';

describe('Separator Component', () => {
  it('renders with default orientation as horizontal', () => {
    const wrapper = mount(Separator);

    expect(wrapper.props().orientation).toBe('horizontal');
    expect(wrapper.findComponent({ name: 'Root' }).props('orientation')).toBe('horizontal');
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
});