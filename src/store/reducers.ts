import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { movies } from 'models/movies';
import { history } from 'utils/history';

const rootReducer = combineReducers({
  router: connectRouter(history),
  [movies.name]: movies.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
