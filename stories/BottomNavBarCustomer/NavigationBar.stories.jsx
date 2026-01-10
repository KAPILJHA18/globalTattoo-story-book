// NavigationBar.stories.jsx
import React, { useState } from 'react';
import { NavigationBar } from './NavigationBar';

export default {
  title: 'Components/NavigationBar',
  component: NavigationBar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    activeId: {
      control: { type: 'radio' },
      options: ['home', 'bookings', 'chat', 'profile'],
    },
  },
};

const Template = (args) => {
  const [activeId, setActiveId] = useState(args.activeId || 'home');

  return (
    <div style={{ 
      background: '#111217', 
      padding: '40px 20px 100px',
      minHeight: '200px',
      display: 'flex',
      alignItems: 'flex-end'
    }}>
      <NavigationBar {...args} activeId={activeId} onChange={setActiveId} />
    </div>
  );
};

export const HomeActive = Template.bind({});
HomeActive.args = {
  activeId: 'home',
};

export const BookingsActive = Template.bind({});
BookingsActive.args = {
  activeId: 'bookings',
};

export const ChatActive = Template.bind({});
ChatActive.args = {
  activeId: 'chat',
};

export const ProfileActive = Template.bind({});
ProfileActive.args = {
  activeId: 'profile',
};
