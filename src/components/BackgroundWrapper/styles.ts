import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import { verticalScale } from '../../theme/mixins';

export const themeStyle = (colors: ThemeColors, inset: EdgeInsets) =>
  StyleSheet.create({
    container: {
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    imageContainer: {
      position: 'absolute',
    },
    topRight: {
      top: verticalScale(-75),
      right: verticalScale(-120),
    },
    bottomLeft: {
      bottom: verticalScale(-75),
      left: verticalScale(-120),
    },
    topImageStyle: {
      width: verticalScale(218),
      height: verticalScale(218),
      resizeMode: 'contain',
      tintColor: 'red',
    },
    bottomImageStyle: {
      width: verticalScale(218),
      height: verticalScale(218),
      resizeMode: 'contain',
      tintColor: 'red',
    },
    childrenContainer: {
      flex: 1,
    },
  });
