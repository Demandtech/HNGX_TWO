import { createSlice } from '@reduxjs/toolkit'
import { getMovieDetail, getSearchMovie, getMoviesList } from './movieThunk'
import { toast } from 'react-toastify'

const initialState = {
  all_movies: [],
  display_movies: [],
  isLoading: false,
  movie_detail: null,
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getMoviesList.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMoviesList.fulfilled, (state, { payload }) => {
        state.all_movies = payload
        state.display_movies = payload?.slice(0, 10)
        state.isLoading = false
      })
      .addCase(getMoviesList.rejected, (state) => {
        toast.error('An error occured, please try again!')
        state.isLoading = false
      })
      .addCase(getMovieDetail.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMovieDetail.fulfilled, (state, { payload }) => {
        state.movie_detail = payload
        state.isLoading = false
      })
      .addCase(getMovieDetail.rejected, (state) => {
        toast.error('An error occured, please try again!')
        state.isLoading = false
      })
      .addCase(getSearchMovie.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSearchMovie.fulfilled, (state, { payload }) => {
        state.all_movies = payload
        state.display_movies = payload?.slice(0, 10)
        state.isLoading = false
      })
      .addCase(getSearchMovie.rejected, (state) => {
        toast.error('An error occured, please try again!')
        state.isLoading = false
      })
  },
})

export default movieSlice.reducer
