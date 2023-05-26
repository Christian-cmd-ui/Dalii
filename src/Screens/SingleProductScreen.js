import { Box, Flex, HStack, Heading, Image, ScrollView, Spacer, Text } from 'native-base';
import React, { useState } from 'react'
import Colors from '../Colors';
import Ratings from '../Components/Ratings'
import Buttone from '../Components/Buttone'
import NumericInput from "react-native-numeric-input"

function SingleProductScreen() {
  const [value, setValue] = useState(0);
  return (
    <Box safeArea flex={1} bg={Colors.white}>
        <ScrollView px={5} showsVerticalScrollIndicator={false}>
                    <Image
                    source={require("../../assets/Images/poulet2.png")} 
                    alt="Image" 
                    w="full" 
                    h={300} 
                    resizeMode="contain"/>
                    <Heading bold fontSize={20} mb={2} lineHeight={22}>
                      Poulet Pané
                    </Heading>
                    <Ratings value={4}/>
                    <HStack space={2} alignItems="center" my={5}>
                      <NumericInput 
                        value={value} 
                        totalWidth={140} 
                        totalHeight={35} 
                        iconSize={25}
                        step={1}
                        maxValue={15}
                        minValue={0}
                        borderColor={Colors.deepGray}
                        rounded
                        textColor={Colors.black}
                        iconStyle={{color:Colors.white}}
                        rightButtonBackgroundColor={Colors.main}
                        leftButtonBackgroundColor={Colors.main}
                      />
                      <Spacer />
                      <Heading bold color={Colors.black} fontSize={19}>
                        XAF 2500
                      </Heading>
                    </HStack>
                    <Text 
                    lineHeight={24} 
                    fontSize={12}
                    >
                      Le poulet frit est du poulet passé dans une mixture à paner puis frit dans de l'huile, à la poêle ou sous pression.
                      Petit repas cool et sympa qui ravit autant les petits que les grands : le poulet pané et frit ! Des bonnes aiguillettes de poulet, tendres et savoureuses, ...
                    </Text>
                    <Buttone bg={Colors.main} color={Colors.main}/>
        </ScrollView>
    </Box>
  )
}

export default SingleProductScreen;