import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Alert from './index.vue';

describe('Alert', () => {
  it('renders the alert with the default type', () => {
    const wrapper = mount(Alert, {
      slots: {
        default: 'This is a default alert message.',
      },
    });
    expect(wrapper.classes()).toContain('bg-pea-warning-100');
  });

  it('renders the alert with a success type', () => {
    const wrapper = mount(Alert, {
      props: {
        type: 'success',
      },
      slots: {
        default: 'This is a success alert message.',
      },
    });
    expect(wrapper.classes()).toContain('bg-pea-success-100');
  });

  it('renders the alert with an error type', () => {
    const wrapper = mount(Alert, {
      props: {
        type: 'error',
      },
      slots: {
        default: 'This is an error alert message.',
      },
    });
    expect(wrapper.classes()).toContain('bg-pea-error-100');
  });

  it('renders the heading if provided', () => {
    const headingText = 'Alert Heading';
    const wrapper = mount(Alert, {
      props: {
        heading: headingText,
      },
      slots: {
        default: 'This is an alert message.',
      },
    });
    expect(wrapper.find('.text-pea-surface-white.text-base').exists()).toBe(true);
    expect(wrapper.find('.text-pea-surface-white.text-base').text()).toBe(headingText);
  });

  it('does not render the heading if not provided', () => {
    const wrapper = mount(Alert, {
      slots: {
        default: 'This is an alert message.',
      },
    });
    expect(wrapper.find('.text-pea-surface-white.text-base').exists()).toBe(false);
  });

  it('renders the alert content', () => {
    const contentText = 'This is an alert message.';
    const wrapper = mount(Alert, {
      slots: {
        default: contentText,
      },
    });
    expect(wrapper.find('.text-sm.font-normal.text-pea-surface-white').text()).toBe(contentText);
  });
});