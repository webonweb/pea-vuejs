import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Avatar from './index.vue'; // Adjust the import path
import EmptyAvatar from '../../../assets/images/empty-avatar.webp';

describe('Avatar.vue', () => {
  const image = {
    src: 'https://example.com/image.jpg',
    title: 'User Avatar',
    alt: 'User Avatar Alt'
  };


  it('matches the snapshot', () => {
    const wrapper = mount(Avatar, {
      props: { image }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});