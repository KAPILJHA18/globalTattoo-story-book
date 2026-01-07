// BottomNavBar.stories.js
import React, { useState } from 'react';
import { BottomNavBar } from './BottomNavBar';

export default {
  title: 'Components/BottomNavBar',
  component: BottomNavBar,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => {
  const [activeId, setActiveId] = useState(args.activeId || 'home');

  return (
    <div style={{ background: '#111217', padding: '16px 0' }}>
      <BottomNavBar
        {...args}
        activeId={activeId}
        onChange={setActiveId}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  activeId: 'home',
};

export const HomeActive = Template.bind({});
HomeActive.args = {
  activeId: 'home',
};

export const CustomItems = Template.bind({});
CustomItems.args = {
  activeId: 'dashboard',
  items: [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'orders', label: 'Orders', icon: '📦' },
    { id: 'stats', label: 'Stats', icon: '📊' },
    { id: 'messages', label: 'Messages', icon: '💬' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ],
};
