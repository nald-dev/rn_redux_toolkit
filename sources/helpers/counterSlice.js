import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    set(state) {
      state = 0

      return state
    },
    sum(state, action) {
      state += action.payload

      return state
    }
  }
})

export const { set, sum } = counterSlice.actions

export default counterSlice.reducer