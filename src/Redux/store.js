import { configureStore } from '@reduxjs/toolkit'
import ProjetSlice from '../Slices/ProjetSlice'

export const store = configureStore({
  reducer: {
      projet:ProjetSlice
  },
})