import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CheckboxComponent from './index.vue';

describe('CheckboxComponent', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(CheckboxComponent, {
      props: {
        id: 'test-checkbox',
        name: 'testName',
        value: false
      },
      slots: {
        default: 'Checkbox Label',
      },
    });
    expect(wrapper.find('label').text()).toBe('Checkbox Label');
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true);
  });

  it('displays error message when provided', () => {
    const wrapper = mount(CheckboxComponent, {
      props: {
        id: 'test-checkbox',
        name: 'testName',
        errorMessage: 'Error occurred',
        value: false
      },
    });
    expect(wrapper.find('.text-pea-error-100').text()).toBe('Error occurred');
  });


  it('displays description when provided', () => {
    const wrapper = mount(CheckboxComponent, {
      props: {
        id: 'test-checkbox',
        name: 'testName',
        value: false
      },
      slots: {
        description: 'Checkbox Description',
      },
    });
    expect(wrapper.find('#test-checkbox-help').text()).toBe('Checkbox Description');
  });
});
