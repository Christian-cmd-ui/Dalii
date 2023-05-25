import { Box, Button, Center, Image, VStack } from 'native-base';
import React from 'react'
import {View, Text} from 'react-native'
import Colors from '../Colors'
import Buttonne from '../Components/Buttonne';

function NotVerifyScreen() {
  return (
    <Box flex={1} bg={Colors.gray} safeAreaTop>
        <Center w="full" h={250}>
          <Image source={require("../../assets/logo5.png")} 
          alt='logo'
          size="lg"
          />
        </Center>
        <VStack space={6} px={5} alignItems="center">
        <Button bg={Colors.black} w="full" h={55} fontWeight="bold" rounded="full"  color={Colors.main}>
            Creer un compte
          </Button>
          <Button bg={Colors.main} color={Colors.black} w="full" h={55} fontWeight="bold" rounded="full">
            Se connecter
          </Button>
        </VStack>
    </Box>
  )
}

export default NotVerifyScreen;