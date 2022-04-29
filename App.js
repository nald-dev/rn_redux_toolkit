import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './sources/helpers/counterSlice'

import Home from './sources/pages/home'
import Screen1 from './sources/pages/screen1'
import Screen2 from './sources/pages/screen2'
import Screen3 from './sources/pages/screen3'

const Stack = createNativeStackNavigator()

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Screen1' component={Screen1} />
        <Stack.Screen name='Screen2' component={Screen2} />
        <Stack.Screen name='Screen3' component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
)

export default App