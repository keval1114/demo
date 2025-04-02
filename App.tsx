import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { MainNavigation } from './src/navigations';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </View>
  );
};

export default App;

