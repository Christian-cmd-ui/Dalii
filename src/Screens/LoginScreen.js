import React from 'react'
import {View, Text} from 'react-native'
import {Box, Button, Heading, Image, Input, NativeBaseProvider, Pressable, VStack} from 'native-base'
import Colors from '../Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function LoginScreen() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bgColor={Colors.black}>
          <Image flex={1} alt="Logo" 
          resizeMode="cover"
          size="lg"
          w="full"
          opacity={32}
          source={require("../../assets/cover4.jpg")} />
          <Box
            w="full"
            h="full"
            position="absolute"
            top="0"
            px="6"
            justifyContent="center"
          >
            <Heading> Se connecter </Heading>
            <VStack space={8} pt="6">
                <Input 
                InputLeftElement={
                  <MaterialIcons name="email" size={20} color={Colors.main}/>
                }
                variant="underlined" 
                placeholder="user@gmail.com" 
                w="70%" 
                pl={2}
                color={Colors.black} 
                borderBottomColor={Colors.underline} />

              <Input 
                  InputLeftElement={
                    <Ionicons name="eye" size={20} color={Colors.main}/>
                  }
                  variant="underlined" 
                  placeholder="**********" 
                  w="70%" 
                  type="password"
                  pl={2}
                  color={Colors.black} 
                  borderBottomColor={Colors.underline}
                />
            </VStack>
            <Button 
            _pressed={{
              bg: Colors.main
            }}
            my={30} w="40%" rounded={50} bg={Colors.main}>
              Se connecter
            </Button>
            <Pressable mt={4}>
              <Text color={Colors.deepestGray}>Creer un compte</Text>
            </Pressable>
          </Box>
      </Box>
    </NativeBaseProvider>
  )
}

export default LoginScreen;