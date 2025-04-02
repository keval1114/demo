import { ImageSourcePropType } from 'react-native';

export interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface UserDetails {
  name: string;
  avatar: ImageSourcePropType;
  description: string;
}

export interface IImageData {
  id:string
  source: ImageSourcePropType;
}
