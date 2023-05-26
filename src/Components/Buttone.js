import { Button, NativeBaseProvider } from 'native-base'
import React from 'react'

function Buttone({mt, bg, color, children, onPress}) {
  return (
    <NativeBaseProvider>
      <Button w="full" h={55} mt={mt} rounded="full" bg={bg} _text={{
          color:color,fontWeight:'bold'
      }}
      _pressed={{bg:bg}}
      onPress={onPress}>
      {children}
      </Button>
    </NativeBaseProvider>
  )
}

export default Buttone