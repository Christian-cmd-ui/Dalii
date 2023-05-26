import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import SingleProductScreen from './src/Screens/SingleProductScreen';
import {NativeBaseProvider} from 'native-base';

export default function App() {

  return (
    <NativeBaseProvider>
        <SingleProductScreen />
    </NativeBaseProvider>
    
  );
}
