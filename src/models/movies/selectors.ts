import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { name } from './constants';

export const moviesSelector = (state: RootState) => state[name];
export const moviesDataSelector = (state: RootState) =>
  moviesSelector(state).data;
export const moviesLoadingSelector = (state: RootState) =>
  moviesSelector(state).loading;
export const moviesIsPendingSelector = (state: RootState) =>
  moviesLoadingSelector(state) === 'pending';
export const moviesIsFulfilledSelector = (state: RootState) =>
  moviesLoadingSelector(state) === 'fulfilled';
export const moviesIsRejectedSelector = (state: RootState) =>
  moviesLoadingSelector(state) === 'rejected';
export const activeCategorySelector = (state: RootState) =>
  moviesDataSelector(state).activeCategory;
export const searchbleStringSelector = (state: RootState) =>
  moviesDataSelector(state).searchbleString;

export const categoriesSelector = (state: RootState) => {
  const moviesData = moviesDataSelector(state).movies;

  const categories = moviesData.map((movie) => movie.category.attributes.term);

  type categoriesListType = {
    [key: string]: number;
  };

  const categoriesList = categories.reduce((acc: categoriesListType, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  return categoriesList;
};

export const useMoviesSelector = () => useSelector(moviesSelector);
export const useMoviesDataSelector = () => useSelector(moviesDataSelector);
export const useMoviesLoadingSelector = () =>
  useSelector(moviesLoadingSelector);
export const useMoviesIsPendingSelector = () =>
  useSelector(moviesIsPendingSelector);
export const useMoviesIsFulfilledSelector = () =>
  useSelector(moviesIsFulfilledSelector);
export const useMoviesIsRejectedSelector = () =>
  useSelector(moviesIsRejectedSelector);
export const useCategoriesSelector = () => useSelector(categoriesSelector);
export const useActiveCategorySelector = () =>
  useSelector(activeCategorySelector);
export const useSearchbleStringSelector = () =>
  useSelector(searchbleStringSelector);
