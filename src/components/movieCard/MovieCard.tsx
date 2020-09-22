import React from 'react';
import { Entry } from 'schemas/movieList';
import { useCategoriesStyles } from './MovieCard.styles';

interface ICardProps {
  movie: Entry;
}

export const Card: React.FunctionComponent<ICardProps> = ({ movie }) => {
  const classes = useCategoriesStyles();

  const releaseDate = new Date(movie['im:releaseDate'].label);
  const releaseYear = releaseDate.getFullYear();
  const genre = movie.category.attributes.term;

  return (
    <div className={classes.card}>
      <img alt="movie cover" src={movie['im:image'][2].label} />
      <div className={classes.infoWrapper}>
        <span className={classes.name}>{movie['im:name'].label}</span>
        <br />
        <span className={classes.details}>{`${releaseYear}, ${genre}`}</span>
        <span className={classes.price}>{movie['im:price'].label}</span>
      </div>
    </div>
  );
};
