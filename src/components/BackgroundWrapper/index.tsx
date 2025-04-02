import React, {ReactNode} from 'react';
import {ImageBackground, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {themeStyle} from './styles';
import {getThemeColors} from '../../helper/color';
import images from '../../assets';

interface BackgroundWrapperProps {
  children: ReactNode;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({children}) => {
  const {colors} = getThemeColors();
  const inset = useSafeAreaInsets();
  const styles = themeStyle(colors, inset);

  return (
    <View style={styles.container}>
      <ImageBackground source={images.Background} style={styles.container}>
        <View style={styles.childrenContainer}>{children}</View>
      </ImageBackground>
    </View>
  );
};

export default BackgroundWrapper;
