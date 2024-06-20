import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import ButtonComponent from './index.vue';

describe('Button', () => {
  it('renders the button with the correct classes', () => {
    const wrapper = mount(ButtonComponent, {
      props: {
        type: 'primary',
        size: 'medium',
        variant: 'button',
      },
    });

    expect(wrapper.classes()).toContain('bg-pea-primary-100/80');
    expect(wrapper.classes()).toContain('text-pea-surface-white');
    expect(wrapper.classes()).toContain('text-base');
  });

  it('renders the button as disabled', () => {
    const wrapper = mount(ButtonComponent, {
      props: {
        disabled: true,
      },
    });

    expect(wrapper.classes()).toContain('opacity-60');
    expect(wrapper.classes()).toContain('cursor-not-allowed');
  });

  it('renders with aria-label', () => {
    const wrapper = mount(ButtonComponent, {
      props: {
        ariaLabel: 'test-label',
      },
    });

    expect(wrapper.attributes('aria-label')).toBe('test-label');
  });

  it('renders default slot content', () => {
    const wrapper = mount(ButtonComponent, {
      slots: {
        default: '<span>Button Content</span>',
      },
    });

    expect(wrapper.html()).toContain('<span>Button Content</span>');
  });

  it('renders with correct padding based on slot content', () => {
    const wrapperWithContent = mount(ButtonComponent, {
      slots: {
        default: '<span>Button Content</span>',
      },
    });

    expect(wrapperWithContent.classes()).toContain('px-4');

    const wrapperWithoutContent = mount(ButtonComponent);

    expect(wrapperWithoutContent.classes()).toContain('px-2');
  });
});
