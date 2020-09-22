import { AxiosResponse } from 'axios';
import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createAction,
} from '@reduxjs/toolkit';
import { createAsyncReducers } from 'utils/createAsyncReducers';
import { requestWithoutAuth } from 'utils/request';
// eslint-disable-next-line import/named
import { Entry } from 'schemas/movieList';
import { name } from './constants';

export const getMovies = createAsyncThunk<
  Entry[],
  {
    count: number;
  }
>(`${name}/testGet`, async ({ count }) => {
  const { data }: AxiosResponse = await requestWithoutAuth({
    method: 'get',
    url: `topmovies/limit=${count}/json`,
    withCredentials: false,
  });

  return data.feed.entry;
});

interface IMoviesData {
  movies: Entry[];
  activeCategory: string;
  searchbleString: string;
}

const initialState: GenericState<IMoviesData> = {
  data: {
    movies: [],
    activeCategory: 'All',
    searchbleString: '',
  },
  loading: 'idle',
  error: null,
};

export const movies = createSlice({
  name,
  initialState,
  reducers: {
    chooseCategory: (state, { payload }) => {
      return {
        ...state,
        loading: 'pending',
        data: {
          ...state.data,
          activeCategory: payload,
        },
      };
    },
    searchMovie: (state, { payload }) => {
      return {
        ...state,
        loading: 'pending',
        data: {
          ...state.data,
          searchbleString: payload,
        },
      };
    },
  },
  extraReducers: (builder) => {
    const { pending, fulfilled, rejected } = createAsyncReducers<IMoviesData>();

    builder
      .addCase(getMovies.pending, pending)
      .addCase(getMovies.fulfilled, (state, action) => {
        return {
          ...state,
          loading: 'fulfilled',
          data: {
            ...state.data,
            movies: action.payload,
          },
        };
      })
      .addCase(getMovies.rejected, rejected);
  },
});

export const { chooseCategory, searchMovie } = movies.actions;
