import { Box, Center, FormControl, Input, ScrollView, Text, VStack } from 'native-base';
import React from 'react'
import Colors from '../Colors';
import Buttone from '../Components/Buttone'


const ShippingInputs = [
  {
    label: "Entrez la ville",
    type: "text"
  },
  {
    label: "Entrez le pays",
    type: "text"
  },
  {
    label: "Entrez le code postal",
    type: "text"
  },
  {
    label: "Entrez l'adresse",
    type: "text"
  }
]

function ShippingScreen() {
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
        <Center pb={15}>
          <Text color={Colors.black} fontSize={16} bold>
            Adresse de livraison
          </Text>
        </Center>
        <Box h="full" bg={Colors.white} px={5}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <VStack space={6} mt={5}>
              {ShippingInputs.map((i, index) => (
                              <FormControl key={index}>
                              <FormControl.Label _text={{
                                fontSize: "14px",
                                fontWeight: "bold",
                              }}>
                                {i.label}
                              </FormControl.Label>
                              <Input 
                                borderWidth={.2} 
                                borderColor={Colors.main} 
                                bg={Colors.subGreen} 
                                py={3}
                                type={i.type} 
                                color={Colors.black}
                                _focus={{
                                  bg:Colors.subGreen,
                                  borderWidth:1,
                                  borderColor:Colors.main,
                                }}
                              />
                            </FormControl>
              ))}
              <Buttone bg={Colors.black} color={Colors.white} mt={5}>
                Continuer
              </Buttone>
            </VStack>
          </ScrollView>
        </Box>
    </Box>
  )
}

export default ShippingScreen;