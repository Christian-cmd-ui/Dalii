import React from 'react'
import {Box, Button, Center, HStack, ScrollView, Text} from 'native-base'
import Colors from '../Colors'
import CartEmpty from '../Components/CartEmpty';
import CartItems from '../Components/CartItems';
import Buttone from '../Components/Buttone';

function CartScreen() {
  return (
    <Box flex={1} safeAreaTop bg={Colors.gray}>
        {/* Header */}
        <Center w="full" py={5}>
          <Text color={Colors.black} fontSize={20} bold>
            Panier
          </Text>
        </Center>
         {/* Panier vide 
        <CartEmpty /> */}
         {/* Panier rempli */}
         <ScrollView showsVerticalScrollIndicator={false}>
            <CartItems  />
            {/* Total */}
            <Center mt={5}>
              <HStack 
                rounded={50} 
                justifyContent="space-between" 
                bg={Colors.white} 
                shadow={2} 
                w="90%"
                pl={5}
                h={45}
                alignItems="center"
              >
                <Text >
                  Total
                </Text>
                <Button 
                  px={10} 
                  h={45}
                  rounded={50} 
                  bg={Colors.main}
                  bold
                  _text={{
                    color: Colors.black,
                    fontWeight: "semibold"
                  }}
                  _pressed={{
                    bg: Colors.main
                  }}
                >
                  XAF 8500
                </Button>
              </HStack>
            </Center>
            {/* Checkout */}
              <Center px={5}>
                  <Buttone bg={Colors.black} color={Colors.white} mt={10}>
                    COMMANDER
                  </Buttone>
              </Center>
         </ScrollView>
    </Box>
  )
}

export default CartScreen;