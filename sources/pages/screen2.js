import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import { useSelector } from 'react-redux'

const Screen2 = () => {
  const count = useSelector(({ counter }) => counter)

  return (
    <SafeAreaView
      style = {{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
      }}
    >
      <Text
        style = {{
          fontSize: 20,
          fontWeight: 'bold'
        }}
      >
        Screen 2
      </Text>

      <Text
        style = {{
          fontSize: 48,
          fontWeight: 'bold',
          marginTop: 20
        }}
      >
        {count}
      </Text>
    </SafeAreaView>
  )
}

export default Screen2