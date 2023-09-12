import axios from 'axios'
import { baseUrl, apiKey } from '../utils'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const getMoviesList = createAsyncThunk('movie/top_rated', async () => {
  try {
    const { data, status } = await axios.get(`${baseUrl}/top_rated`, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
    if (status === 200) {
      return data.results
    }
  } catch (error) {
    console.log(error)
    console.log(error.response.data)
  }
})

export const getMovieDetail = createAsyncThunk(
  'movie/detail',
  async (id, thunkAPI) => {
    try {
      const { data, status } = await axios.get(`${baseUrl}/${id}`, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      })
      if (status === 200) {
        return data
      }
    } catch (error) {
      console.log(error)
      thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

export const getSearchMovie = createAsyncThunk(
  'movie/search',
  async (query, thunkAPI) => {
    try {
      const { data, status } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}`,
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )
      if (status === 200) {
        return data.results
      }
    } catch (error) {
      console.log(baseUrl)
      console.log(error)
      thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
