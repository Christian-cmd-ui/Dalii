import { HStack, Text } from 'native-base'
import React from 'react'
import Colors from '../Colors'

function HomeSearch() {
  return (
    <HStack 
        space={3} 
        w="full" 
        px={6} 
        bg={Colors.main} 
        py={4} 
        alignItems="center" 
        safeAreaTop
    >

    </HStack>
  )
}

export default HomeSearch