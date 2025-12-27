import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    image:
      'https://images.pexels.com/photos/4125508/pexels-photo-4125508.jpeg',
    rating: 5,
    isFavorite: true,
    userAvatar:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    userName: 'Priscilla Bonato',
  },
  argTypes: {
    rating: { control: { type: 'number', min: 0, max: 5, step: 1 } },
    isFavorite: { control: 'boolean' },
    userName: { control: 'text' },
  },
};

export const Default = {
  args: {},
};

export const NotFavorite = {
  args: {
    isFavorite: false,
  },
};

export const LowRating = {
  args: {
    rating: 3,
  },
};
