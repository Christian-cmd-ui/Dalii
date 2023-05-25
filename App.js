import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import {NativeBaseProvider} from 'native-base';

export default function App() {

  return (
    <NativeBaseProvider>
        <HomeScreen />
    </NativeBaseProvider>
    
  );
}
