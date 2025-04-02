import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import {
  scaleAndClampFontSize,
  SCREEN_WIDTH,
  verticalScale,
} from '../../theme/mixins';

export const themeStyle = (colors: ThemeColors, insert: EdgeInsets) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    menuStyle: {
      height: verticalScale(18),
      width: verticalScale(18),
      marginTop: verticalScale(8),
    },
    menu: {
      position: 'absolute',
      top: verticalScale(insert?.top),
      right: verticalScale(24),
    },
    userContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: verticalScale(36),
      marginTop: verticalScale(67),
      marginHorizontal: verticalScale(24),
    },
    avatar: {
      width: verticalScale(50),
      height: verticalScale(50),
      borderRadius: verticalScale(7),
      marginRight: verticalScale(10),
    },

    image: {width: SCREEN_WIDTH, height: verticalScale(494)},
    title: {
      fontSize: scaleAndClampFontSize(32),
      lineHeight: scaleAndClampFontSize(40),
      fontWeight: '300',
      color: colors.white,
    },
    titleText: {
      fontSize: scaleAndClampFontSize(24),
      lineHeight: scaleAndClampFontSize(30),
      fontWeight: '300',
      color: colors.lingeringStorm,
    },
    description: {
      fontSize: scaleAndClampFontSize(16),
      lineHeight: scaleAndClampFontSize(24),
      marginTop: verticalScale(2),
      marginBottom: verticalScale(22),
      color: colors.white,
    },
    descriptionText: {
      fontSize: scaleAndClampFontSize(24),
      lineHeight: scaleAndClampFontSize(30),
      marginTop: verticalScale(2),
      color: colors.cocosBlack,
      fontWeight: '300',
    },
    topBrands: {
      fontSize: scaleAndClampFontSize(18),
      lineHeight: scaleAndClampFontSize(30),
      marginTop: verticalScale(61),
      color: colors.lingeringStorm,
      fontWeight: '300',
      textAlign: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
    },
    button: {
      backgroundColor: colors.whiteShoulders,
      borderRadius: verticalScale(40),
      marginRight: verticalScale(10),
      alignItems: 'center',
      paddingVertical: verticalScale(8.5),
      paddingHorizontal: verticalScale(14),
    },
    buttonOutline: {
      borderWidth: verticalScale(1),
      borderColor: colors.whiteOp32,
      borderRadius: verticalScale(65),
      paddingVertical: verticalScale(8.5),
      paddingHorizontal: verticalScale(14),
    },
    buttonText: {
      color: colors.dryadBark,
      fontWeight: '400',
      fontSize: scaleAndClampFontSize(13),
      lineHeight: scaleAndClampFontSize(18),
    },
    subView: {
      position: 'absolute',
      bottom: verticalScale(23),
      left: verticalScale(24),
    },
    
    topBrandsContainer: {
      width: SCREEN_WIDTH,
      flex: 1,
    },
    buttonStyle: {
      height: verticalScale(52),
      width: verticalScale(132),
      top: verticalScale(50),
      borderRadius: verticalScale(60),
      backgroundColor: colors.black,
      zIndex: 1,
      position: 'absolute',
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      padding: verticalScale(6),
      opacity:.8
    },
    subButton: {
      height: verticalScale(40),
      width: verticalScale(60),
      borderRadius: verticalScale(38),
      backgroundColor: colors.dryadBark,
      alignItems: 'center',
      justifyContent: 'center',
    },
    subtract: {
      height: verticalScale(16),
      width: verticalScale(16),
    },
    scrollContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop:verticalScale(50),
    },
    advertiseImage:{
      height: verticalScale(50),

    }
  });


