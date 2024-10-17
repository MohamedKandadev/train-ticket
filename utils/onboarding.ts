import images from '../constants/images';
import {OnbordingItem} from '../types/types/onboarding.type';

export const onBoardingItems: OnbordingItem[] = [
  {
    id: 1,
    title: 'Book Your Tickets with Ease',
    desc: 'Quickly book train tickets in just a few taps.',
    image: images.splash_1,
  },
  {
    id: 2,
    title: 'Real-Time Train Schedules',
    desc: 'Get live train schedules and updates at your fingertips.',
    image: images.splash_2,
  },
  {
    id: 3,
    title: 'Manage Your Bookings Effortlessly',
    desc: 'Access and manage all your train bookings in one place.',
    image: images.splash_3,
  },
];
