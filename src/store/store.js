import { configureStore } from '@reduxjs/toolkit'
import counterkaliReducer from '../reducers/counter'

export const store = configureStore({
  reducer: {
    counterkali: counterkaliReducer
    },
})