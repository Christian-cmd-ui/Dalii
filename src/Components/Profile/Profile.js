import { Box, FormControl, Input, ScrollView, Text, VStack } from 'native-base'
import React from 'react'
import Colors from '../../Colors';
import Buttone from '../Buttone';


const Inputs = [
  {
    label: "Nom d'utilisateur",
    type: "text",
  },
  {
    label: "Email",
    type: "text",
  },
  {
    label: "Nouveau mot de passe",
    type: "password",
  },
  {
    label: "Confirmation de mot de passe",
    type: "password",
  }
]

const Profile = () => {
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={6} mt={5} pb={10}>
          {
            Inputs.map((i, index) => (
              <FormControl key={index}>
              <FormControl.Label _text={{
                fontSize: "12px",
                fontWeight: "bold",
                color: Colors.black,
              }}>
                {i.label}
              </FormControl.Label>
              <Input 
                borderWidth={0.2}
                bg={Colors.subGreen}
                borderColor = {Colors.main}
                py={3}
                type={i.type}
                color={Colors.black}
                fontSize={15}
                _focus = {{
                  bg:Colors.subGreen, 
                  borderColor: Colors.main,
                  borderWidth:1,
                }}
              />
            </FormControl>
            ))
          }
          <Buttone bg={Colors.black} color={Colors.white}>
            Modifier le profil
          </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  )
}

export default Profile