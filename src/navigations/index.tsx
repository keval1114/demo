import {
  createStackNavigator,
  StackCardInterpolationProps,
} from '@react-navigation/stack';
import React from 'react';
import {Easing} from 'react-native';
import {ROUTES} from '../constants/routes';
import HomeScreen from '../screen/Home';

export type MainStackParamList = {
  [ROUTES.APP_STACK.HOME]: undefined;
};

export const config = {
  animation: 'timing' as const,
  config: {
    duration: 600,
    easing: Easing.out(Easing.poly(4)),
  },
};

const Stack = createStackNavigator<MainStackParamList>();

export const cardStyleInterpolator = ({
  current,
  layouts,
}: StackCardInterpolationProps) => {
  return {
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
          }),
        },
      ],
    },
  };
};

export const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        transitionSpec: {
          open: config,
          close: config,
        },
        cardStyleInterpolator: cardStyleInterpolator,
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name={ROUTES.APP_STACK.HOME}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
