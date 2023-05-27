import { Box, Button, HStack, Pressable, ScrollView, Text } from 'native-base'
import React from 'react'
import Colors from '../../Colors'

const Orders = () => {
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable>
          <HStack 
            space={4} 
            justifyContent="space-between" 
            alignItems="center" 
            bg={Colors.gray}
            py={5}
            px={2}
          >
            <Text fontSize={9} color={Colors.black} isTruncated>
              123282183
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              PAYEE
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              24 Mai 2023
            </Text>
            <Button 
              px={7} 
              py={1.5} 
              rounded={50} 
              bg={Colors.main} 
              _text={{
                color:Colors.white,
              }}
              _pressed={{
                color:Colors.main
              }}
            >
              XAF 12.500
            </Button>
          </HStack>
        </Pressable>
        <Pressable>
          <HStack 
            space={4} 
            justifyContent="space-between" 
            alignItems="center"
            py={5}
            px={2}
          >
            <Text fontSize={9} color={Colors.black} isTruncated>
              123282183
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
             Impayée
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              24 Juin 2023
            </Text>
            <Button 
              px={7} 
              py={1.5} 
              rounded={50} 
              bg={Colors.red} 
              _text={{
                color:Colors.white,
              }}
              _pressed={{
                color:Colors.red
              }}
            >
              XAF 10.500
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  )
}

export default Orders