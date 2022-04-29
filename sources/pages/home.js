import React from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { set, sum } from '../helpers/counterSlice'

const Home = ({ navigation }) => {
  const count = useSelector(({ counter }) => counter)
  const dispatch = useDispatch()

  return (
    <SafeAreaView
      style = {{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
      }}
    >
      <TouchableOpacity
        onPress={() => dispatch(sum(1))}
        onLongPress={() => dispatch(set())}
      >
        <Text
          style = {{
            fontSize: 48,
            fontWeight: 'bold'
          }}
        >
          {count}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Screen1')}
        style = {{
          alignItems: 'center',
          backgroundColor: 'lightgray',
          borderRadius: 10,
          marginTop: 50,
          padding: 20,
          width: 250
        }}
      >
        <Text
          style = {{
            fontSize: 20,
            fontWeight: 'bold'
          }}
        >
          Screen 1
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Screen2')}
        style = {{
          alignItems: 'center',
          backgroundColor: 'lightgray',
          borderRadius: 10,
          marginTop: 20,
          padding: 20,
          width: 250
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
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Screen3')}
        style = {{
          alignItems: 'center',
          backgroundColor: 'lightgray',
          borderRadius: 10,
          marginTop: 20,
          padding: 20,
          width: 250
        }}
      >
        <Text
          style = {{
            fontSize: 20,
            fontWeight: 'bold'
          }}
        >
          Screen 3
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home