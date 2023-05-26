import { Box, Center, Heading, Image, Text} from 'native-base';
import React from 'react'
import Colors from '../Colors'
import Tabs from '../Components/Profile/Tabs';


function ProfileScreen() {
  return (
    <>
        <Center bg={Colors.main} pt={10} pb={6} >
            <Image 
            source={{uri:"https://res.cloudinary.com/dpflxilm6/image/upload/v1685136398/Dalii/user_1_ntkewy.png"}} 
            alt="profile" 
            w={24}
            h={24}
            resizeMode="cover" />
            <Heading bold fontSize={15} isTruncated my={2} color={Colors.black}>
              Utilisateur 1
            </Heading>
            <Text italic fontSize={10} color={Colors.black}>
              Cree le 24 Mai 2023
            </Text>
        </Center>
        <Tabs />
     </>
  )
}

export default ProfileScreen;