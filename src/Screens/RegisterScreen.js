import React from 'react'
import {View, Text} from 'react-native'
import { NativeBaseProvider, Box, Image, Heading, VStack, Input, Button, Pressable } from 'native-base';
import Colors from '../Colors';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';

function RegisterScreen() {
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
            <Heading> Creer un Compte </Heading>
            <VStack space={8} pt="6">
            <Input 
                InputLeftElement={
                  <FontAwesome name="user" size={20} color={Colors.main}/>
                }
                variant="underlined" 
                placeholder="Nom d'utilisateur" 
                w="70%" 
                pl={2}
                color={Colors.black} 
                borderBottomColor={Colors.underline} />


                <Input 
                InputLeftElement={
                  <MaterialIcons name="email" size={20} color={Colors.main}/>
                }
                variant="underlined" 
                placeholder="user@gmail.com" 
                w="70%"
                type="text" 
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
            my={30} w="50%" rounded={50} bg={Colors.main}>
              Creer un compte
            </Button>
            <Pressable mt={4}>
              <Text color={Colors.deepestGray}>Se connecter</Text>
            </Pressable>
          </Box>
      </Box>
    </NativeBaseProvider>
  )
}

export default RegisterScreen;