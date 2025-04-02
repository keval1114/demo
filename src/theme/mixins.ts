import {Dimensions, Platform} from 'react-native';

const designResolution = {
  width: 393,
  height: 852,
};

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';

export const verticalScale = (size: number) =>
  (SCREEN_HEIGHT / designResolution.height) * size;

export const scaleAndClampFontSize = (
  size: number,
  minSize = size,
  maxSize = size,
) => {
  const scaledSize = verticalScale(size);
  return Math.min(Math.max(scaledSize, minSize), maxSize);
};
