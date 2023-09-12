import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './redux/movie'


export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
})
