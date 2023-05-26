import React, { useState } from 'react'
import { Box, CheckIcon, FormControl, Heading, Select, Text, TextArea, VStack } from 'native-base'
import Colors from '../Colors'
import Ratings from './Ratings'
import Messages from './Notifications/Messages'
import Buttone from './Buttone'

export default function Review() {
    const [ratings, setRatings] = useState('');
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        Commentaires
      </Heading>
      {/* Pas de commentaires 
      <Messages 
            color={Colors.black} 
            bg={Colors.gray}
            bold
            children={"Pas de commentaires"}
        /> */}
        {/* Commentaires */}
      <Box p={3} bgColor={Colors.gray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
            Client John
        </Heading>
        <Ratings value={4} />
        <Text my={2} fontSize={11}>
            24 Mai 2023
        </Text>
        <Messages 
            color={Colors.black} 
            bg={Colors.white} 
            size={12} 
            children={"Petit repas cool et sympa qui ravit autant les petits que les grands : le poulet pané et frit !"}
        />
      </Box>
      {/* Ecrire un commentaire */}
      {/*<Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
            Laisser un commentaire :
        </Heading>
        <VStack space={6}>
            <FormControl>
                <FormControl.Label
                    _text={{
                        fontSize:'15px',
                        fontWeight:"bold",
                    }} 
                >
                    Noter :
                </FormControl.Label>
                <Select
                    bg={Colors.white}
                    borderWidth={0}
                    rounded={5}
                    py={4}
                    placeholder="Noter"
                    _selectedItem={{
                        bg: Colors.white,
                        endIcon: <CheckIcon size={5}/>
                    }}
                    selectedValue={ratings}
                    onValueChange={(e) => setRatings(e)}
                >
                    <Select.Item label="1 - Null" value="1"/>
                    <Select.Item label="2 - Passable" value="2"/>
                    <Select.Item label="3 - Bon" value="3"/>
                    <Select.Item label="4 - Tres bon" value="4"/>
                    <Select.Item label="5 - Excellent" value="5"/>
                </Select>
            </FormControl>
            <FormControl>
            <FormControl.Label
                    _text={{
                        fontSize:'15px',
                        fontWeight:"bold",
                    }} 
                >
                    Commenter :
                </FormControl.Label>
                <TextArea
                    h={24}
                    w="full"
                    placeholder="Ce plat est delicieux...."
                    borderWidth={0}
                    bg={Colors.subGreen}
                    py={4}
                    _focus={{
                        bg: Colors.subGreen,
                    }}
                />
            </FormControl>
            <Buttone 
                bg={Colors.main}
            >
                Envoyer
            </Buttone>
            {/* Si utilisateur non connecte */}
           {/* <Messages 
            color={Colors.white} 
            bg={Colors.black} 
            children={"Veuillez vous connecter pour commenter"}
        />
        </VStack>
      </Box> */}
    </Box>
  )
}