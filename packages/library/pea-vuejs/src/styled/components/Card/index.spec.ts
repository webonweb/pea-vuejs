import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CardComponent from './index.vue';

describe('Card', () => {
  it('renders with correct id and type', () => {
    const wrapper = mount(CardComponent, {
      props: {
        id: 'test-id',
        type: 'section',
      },
    });

    expect(wrapper.attributes('id')).toBe('test-id');
    expect(wrapper.find('section').exists()).toBe(true);
  });

  it('applies the correct variant class', () => {
    const wrapper = mount(CardComponent, {
      props: {
        id: 'test-id',
        variant: 'success',
      },
    });

    expect(wrapper.classes()).toContain('border-l-4');
    expect(wrapper.classes()).toContain('border-l-pea-success-100');
  });

  it('applies the correct shadow class on hover', () => {
    const wrapper = mount(CardComponent, {
      props: {
        id: 'test-id',
        shadow: 'hover',
      },
    });

    expect(wrapper.classes()).toContain('hover:shadow-md');
  });

  it('applies the correct static shadow class', () => {
    const wrapper = mount(CardComponent, {
      props: {
        id: 'test-id',
        shadow: 'static',
      },
    });

    expect(wrapper.classes()).toContain('shadow-md');
  });

  it('has the correct default props', () => {
    const wrapper = mount(CardComponent, {
      props: {
        id: 'test-id',
      },
    });

    expect(wrapper.props().shadow).toBe('none');
    expect(wrapper.props().variant).toBe('warning');
    expect(wrapper.props().type).toBe('div');
  });
});
