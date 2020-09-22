import * as React from 'react';
import classNames from 'classnames';
import { useAppDispatch } from 'store';
import {
  useCategoriesSelector,
  useActiveCategorySelector,
} from 'models/movies/selectors';
import { chooseCategory } from 'models/movies';
import { useCategoriesStyles } from './Categories.styles';

interface IHeaderProps {
  onChoose: () => void;
}

export const Categories: React.FunctionComponent<IHeaderProps> = ({
  onChoose,
}) => {
  const classes = useCategoriesStyles();
  const dispatch = useAppDispatch();
  const activeCategory = useActiveCategorySelector();
  const categories = Object.entries(useCategoriesSelector());

  const onChooseCategory = (categoryName: string) => {
    dispatch(chooseCategory(categoryName));
    onChoose();
  };

  return (
    <div className={classes.wrapper}>
      <div
        role="button"
        tabIndex={0}
        className={classNames(classes.categoryItem, {
          active: activeCategory === 'All',
        })}
        onClick={() => onChooseCategory('All')}
      >
        All
      </div>
      {categories.map((item) => {
        const [categoryName, moviesCount] = item;
        return (
          <div
            key={categoryName}
            role="button"
            tabIndex={0}
            className={classNames(classes.categoryItem, {
              active: activeCategory === categoryName,
            })}
            onClick={() => onChooseCategory(categoryName)}
          >
            <span>{categoryName}</span>
            <span>{moviesCount}</span>
          </div>
        );
      })}
    </div>
  );
};
