import { Box, ScrollView } from 'native-base';
import React from 'react'
import {View, Text} from 'react-native'
import Colors from '../Colors';
import OrderInfo from '../Components/OrderInfo';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

function PlaceOrderScreen() {
  return (
    <Box bg={Colors.gray} flex={1} safeArea pt={6}>
        <Box>
          <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
          >
            <OrderInfo 
              title="Client" 
              subTitle="Utilisateur 1" 
              text="user@gmail.com"
              icon={<FontAwesome name="user" size={30} />}
            />
            <OrderInfo 
              title="Livraison" 
              subTitle="Adresse: Awae escalier" 
              text="Mode de paiement: Orange Money"
              icon={<FontAwesome5 name="shipping-fast" size={30} />}
            />
          </ScrollView>
        </Box>
    </Box>
  )
}

export default PlaceOrderScreen;