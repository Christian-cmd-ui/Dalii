import { Box, Center, FormControl, HStack, Image, Input, ScrollView, Spacer, Text, VStack } from 'native-base';
import React from 'react'
import Colors from '../Colors';
import Buttone from '../Components/Buttone'
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const paymentMethods = [
  {
    image: require("../../assets/Images/OrangeMoney.png"),
    alt: "Orange Money",
    icon: "Ionicons"
  },
  {
    image: require("../../assets/Images/MobileMoney.png"),
    alt: "Mobile Money",
    icon: "fontAwesome"
  },
]

function PaymentScreen() {
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen} py={5}>
        <Center pb={15}>
          <Text color={Colors.black} fontSize={16} bold>
            Mode de paiement
          </Text>
        </Center>
        <Box h="full" bg={Colors.white} px={5}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <VStack space={6} mt={5}>
              {paymentMethods.map((i, index) => (
                              <HStack
                              key={index}
                              alignItems="center" 
                              bg={Colors.white} 
                              px={3} 
                              py={1}
                              justifyContent="space-between" 
                              rounded={10}
                            >
                              <Box>
                                <Image 
                                  source={i.image} 
                                  alt={i.alt}
                                  resizeMode="contain"
                                  w={60}
                                  h={50}
                                />
                              </Box>
                              {i.icon === "Ionicons" ? 
                              (<Ionicons name="checkmark-circle" size={30} color={Colors.green} />)
                               : 
                               (<FontAwesome name="circle-thin" size={30} color={Colors.green} />)
                               }
                            </HStack>
              ))}
              <Buttone bg={Colors.black} color={Colors.white} mt={5}>
                Continuer
              </Buttone>
              <Text italic textAlign="center">
                Moyen de paiment choisi par defaut: <Text bold>Orange Money</Text>
              </Text>
            </VStack>
          </ScrollView>
        </Box>
    </Box>
  )
}

export default PaymentScreen;