// UserReviewCard.stories.js
import { UserReviewCard } from './UserReviewCard';

export default {
  title: 'Components/UserReviewCard',
  component: UserReviewCard,
  parameters: {
    layout: 'centered',
  },
  args: {
    reviewerName: 'Priscilla Bonato',
    reviewerAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=30&h=30&fit=crop',
    reviewDate: 'Today',
    reviewTime: '11:00 AM',
    reviewText: 'Absolutely loved the detailing! Kadyn turned my idea into stunning art. Truly talented!',
    slides: [
      {
        image: 'https://images.pexels.com/photos/4125508/pexels-photo-4125508.jpeg?auto=compress&cs=tinysrgb&w=400',
        artistName: 'Kadyn Pierce',
        artistLocation: 'New York, USA',
      },
      {
        image: 'https://images.pexels.com/photos/1596442/pexels-photo-1596442.jpeg?auto=compress&cs=tinysrgb&w=400',
        artistName: 'Sarah Johnson',
        artistLocation: 'Los Angeles, CA',
      },
      {
        image: 'https://images.pexels.com/photos/2693235/pexels-photo-2693235.jpeg?auto=compress&cs=tinysrgb&w=400',
        artistName: 'Mike Chen',
        artistLocation: 'San Francisco, CA',
      },
      {
        image: 'https://images.pexels.com/photos/2693235/pexels-photo-2693235.jpeg?auto=compress&cs=tinysrgb&w=400',
        artistName: 'Mike Chen',
        artistLocation: 'San Francisco, CA',
      },
    ],
    rating: 5,
    likes: 120,
    comments: 12,
  },
  argTypes: {
    rating: { control: { type: 'number', min: 0, max: 5, step: 1 } },
    likes: { control: { type: 'number', min: 0 } },
    comments: { control: { type: 'number', min: 0 } },
    reviewText: { control: 'text' },
    reviewerName: { control: 'text' },
    reviewDate: { control: 'text' },
    reviewTime: { control: 'text' },
  },
};

export const Default = {};

export const SingleSlide = {
  args: {
    slides: [
      {
        image: 'https://images.pexels.com/photos/4125508/pexels-photo-4125508.jpeg?auto=compress&cs=tinysrgb&w=400',
        artistName: 'Kadyn Pierce',
        artistLocation: 'New York, USA',
      },
    ],
  },
};

export const LowRating = {
  args: {
    rating: 3,
  },
};

export const ManyLikes = {
  args: {
    likes: 1250,
    comments: 89,
  },
};
