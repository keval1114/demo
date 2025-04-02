import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import images from '../../assets';
import BackgroundWrapper from '../../components/BackgroundWrapper';
import { carouselData, imageData, userDetails } from '../../constants/static';
import { getThemeColors } from '../../helper/color';
import strings from '../../locales';
import { SCREEN_WIDTH, verticalScale } from '../../theme/mixins';
import { themeStyle } from './styles';

const HomeScreen = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const insert = useSafeAreaInsets();
  const { colors } = getThemeColors();
  const styles = themeStyle(colors, insert);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollSpeed = 2000;

  useEffect(() => {
    startAutoScroll();
  }, []);

  const startAutoScroll = () => {
    scrollX.setValue(0);
    Animated.loop(
      Animated.timing(scrollX, {
        toValue: -SCREEN_WIDTH * imageData.length,
        duration: scrollSpeed * imageData.length,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const handleActiveIndex = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <View>
      <ImageBackground source={item.image} style={styles.image}>
        <View style={styles.subView}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
              <Text style={styles.buttonText}>{strings.APPLY_TO_MY_ROOM}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonOutline} activeOpacity={0.8}>
              <Text style={[styles.buttonText, { color: colors.white }]}>
                {strings.DETAILS}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <BackgroundWrapper>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity activeOpacity={0.8} style={styles.menu}>
          <Image source={images.Menu} style={styles.menuStyle} />
        </TouchableOpacity>

        {/* User Details */}
        <View style={styles.userContainer}>
          <Image source={userDetails.avatar} style={styles.avatar} />
          <View >
            <Text style={styles.titleText}>{userDetails.name}</Text>
            <Text style={styles.descriptionText}>{userDetails.description}</Text>
          </View>
        </View>

        {/* Carousel */}
        <View>
          <Carousel
            loop
            width={SCREEN_WIDTH}
            height={verticalScale(494)}
            autoPlay
            autoPlayInterval={3000}
            data={carouselData}
            scrollAnimationDuration={500}
            renderItem={renderItem}
          />
        </View>

        <View style={styles.topBrandsContainer}>
          <Text style={styles.topBrands}>{strings.TOP_BRANDS}</Text>
          <View style={styles.buttonStyle}>
            {[1, 2].map((index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleActiveIndex(index)}
                style={[
                  styles.subButton,
                  { backgroundColor: activeIndex === index ? colors.dryadBark : colors.black },
                ]}
                activeOpacity={0.8}
              >
                <Image source={index === 1 ? images.Subtract : images.Magic} style={styles.subtract} />
              </TouchableOpacity>
            ))}
          </View>

          <Animated.View style={[styles.scrollContainer, { transform: [{ translateX: scrollX }] }]}>
            {imageData.concat(imageData).map((item, index) => (
              <Image key={index} resizeMode="contain" source={item.source} style={styles.advertiseImage} />
            ))}
          </Animated.View>
        </View>
      </SafeAreaView>
    </BackgroundWrapper>
  );
};

export default HomeScreen;
