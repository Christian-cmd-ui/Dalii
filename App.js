import React from 'react';
import {NativeBaseProvider} from 'native-base';
import ShippingScreen from './src/Screens/ShippingScreen';

export default function App() {

  return (
    <NativeBaseProvider>
        <ShippingScreen />
    </NativeBaseProvider>
    
  );
}
