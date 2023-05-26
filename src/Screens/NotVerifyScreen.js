import { Box, Center, Image, VStack } from 'native-base';
import React from 'react'
import Colors from '../Colors'
import Buttone from '../Components/Buttone';

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
        <Buttone bg={Colors.black} w="full" color={Colors.main}>
            Creer un compte
          </Buttone>
          <Buttone bg={Colors.main} color={Colors.black} w="full">
            Se connecter
          </Buttone>
        </VStack>
    </Box>
  )
}

export default NotVerifyScreen;