// ProfileHeader.stories.jsx
import React from 'react';
import { ProfileHeader } from './ProfileHeader';

export default {
  title: 'Components/ProfileHeader',
  component: ProfileHeader,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: { control: 'text' },
    location: { control: 'text' },
    gender: { control: 'text' },
    isVerified: { control: 'boolean' },
    followers: { control: 'text' },
    following: { control: 'text' },
    reviews: { control: 'text' },
    likes: { control: 'text' },
  },
};

const Template = (args) => <ProfileHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  coverImage: 'https://plus.unsplash.com/premium_photo-1661714220704-711551e73799?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  avatarImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?w=100',
  name: 'Kadyn Pierce',
  location: 'New York, USA',
  gender: 'Male',
  isVerified: true,
  stats: {
    followers: 80,
    following: 120,
    reviews: 100,
    likes: '1.2K',
  },
};

export const Unverified = Template.bind({});
Unverified.args = {
  ...Default.args,
  isVerified: false,
  name: 'Sarah Johnson',
  stats: {
    followers: 245,
    following: 89,
    reviews: 67,
    likes: '2.4K',
  },
};

export const HighStats = Template.bind({});
HighStats.args = {
  ...Default.args,
  stats: {
    followers: 1250,
    following: 340,
    reviews: 289,
    likes: '12.5K',
  },
};
