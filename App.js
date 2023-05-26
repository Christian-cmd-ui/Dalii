import React from 'react';
import {NativeBaseProvider} from 'native-base';
import CartScreen from './src/Screens/CartScreen';

export default function App() {

  return (
    <NativeBaseProvider>
        <CartScreen />
    </NativeBaseProvider>
    
  );
}
