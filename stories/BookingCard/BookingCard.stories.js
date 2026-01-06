// BookingCard.stories.js
import { BookingCard } from './BookingCard';

export default {
  title: 'Components/BookingCard',
  component: BookingCard,
  parameters: {
    layout: 'centered',
  },
  args: {
    bookingId: '12345678',
    avatar:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
    name: 'Priscilla Bonato',
    location: 'California, USA',
    gender: 'Female',
    bookingDate: '25 Oct, 2025',
    bookingTime: '10:00 PM',
    serviceLabel: 'Mandala',
    status: 'pending',
    currency: '$',
    price: '3,520',
  },
  argTypes: {
    status: {
      control: { type: 'radio' },
      options: ['pending', 'canceled', 'completed'],
    },
    name: { control: 'text' },
    location: { control: 'text' },
    gender: { control: 'text' },
    bookingDate: { control: 'text' },
    bookingTime: { control: 'text' },
    serviceLabel: { control: 'text' },
    price: { control: 'text' },
  },
};

export const Pending = {};

export const Canceled = {
  args: {
    name: 'Alexa Bonato',
    status: 'canceled',
    price: '800',
    serviceLabel: 'Custom Tattoo',
  },
};

export const Completed = {
  args: {
    name: 'Ion Dodly',
    status: 'completed',
    price: '3,520',
    serviceLabel: 'Custom Tattoo',
  },
};
