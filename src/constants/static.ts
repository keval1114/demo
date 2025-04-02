import images from '../assets';
import strings from '../locales';
import { CarouselItem, UserDetails } from '../types/types';

export const carouselData: CarouselItem[] = [
  {
    id: 1,
    title: 'Harvest',
    description: 'Bold design meets timeless beauty',
    image: images.DesignOne,
  },
  {
    id: 2,
    title: 'Stoneworks',
    description: 'Bold design meets timeless beauty',
    image: images.DesignTwo,
  },
  {
    id: 3,
    title: 'Modern Elegance',
    description: 'A blend of simplicity and sophistication',
    image: images.DesignThree,
  },
];

export const userDetails: UserDetails = {
  name: strings.GEORGIA,
  avatar: images.User,
  description: strings.START_DESIGNING,
};

export const imageData:IImageData = [
  {id: '1', source: images.LatterOne},
  {id: '2', source: images.LatterTwo},
  {id: '3', source: images.LatterThree},
];