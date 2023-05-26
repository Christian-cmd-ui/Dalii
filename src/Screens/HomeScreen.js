import { Box } from 'native-base';
import React from 'react'
import {View, Text} from 'react-native'
import Colors from '../Colors';
import HomeSearch from '../Components/HomeSearch';
import HomeProducts from '../Components/HomeProducts';

function HomeScreen() {
  return (
    <Box flex={1} bg={Colors.gray}>
        <HomeSearch />
        <HomeProducts />
    </Box>
  )
}

export default HomeScreen;