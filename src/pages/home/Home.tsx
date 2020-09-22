import React, { useRef } from 'react';
import classNames from 'classnames';
import { getMovies } from 'models/movies';
import { Card } from 'components/movieCard';
import { SmallLoader } from 'components/loader/SmallLoader';
import { useAppDispatch } from 'store';
import {
  useMoviesDataSelector,
  useActiveCategorySelector,
  useSearchbleStringSelectorSelector,
  useMoviesIsPendingSelector,
  useMoviesIsRejectedSelector,
} from 'models/movies/selectors';
import emoji from 'components/icons/Emoji.svg';
import { useStyles } from './Home.styles';

export const Home = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { movies } = useMoviesDataSelector();
  const activeCategory = useActiveCategorySelector();
  const searchbleString = useSearchbleStringSelectorSelector();
  const isPending = useMoviesIsPendingSelector();
  const isRejected = useMoviesIsRejectedSelector();
  const wrapper = useRef<HTMLDivElement>(null);
  const isMoviesAvailable = movies.length;
  const movieCardWidth = 300;
  const movieCardHeight = 170;

  const moviesToShow = movies.filter(
    (movie) =>
      (movie.category.attributes.term === activeCategory ||
        activeCategory === 'All') &&
      (searchbleString === '' ||
        movie['im:name'].label.toLowerCase().includes(searchbleString)),
  );
  const isMoviesSearchResult = !!moviesToShow.length;

  React.useEffect(() => {
    const scrolledBlock: HTMLDivElement | null = wrapper.current;
    const itemsPreloadCount =
      Math.ceil(scrolledBlock!.clientHeight / movieCardHeight) *
      Math.ceil(scrolledBlock!.clientWidth / movieCardWidth);
    dispatch(getMovies({ count: itemsPreloadCount }));
  }, []);

  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const scrolledBlock: HTMLDivElement | null = wrapper.current;
    if (
      scrolledBlock?.scrollHeight ===
        scrolledBlock!.scrollTop + scrolledBlock!.clientHeight &&
      activeCategory === 'All'
    ) {
      dispatch(getMovies({ count: movies.length + 20 }));
    }
  };

  return (
    <div
      ref={wrapper}
      className={classNames(classes.content, {
        [classes.noEmpty]: !!moviesToShow.length,
      })}
      onScroll={(e) => scrollHandler(e)}
    >
      {isMoviesSearchResult
        ? moviesToShow.map((movie) => (
            <Card key={movie.id.attributes['im:id']} movie={movie} />
          ))
        : null}
      {!isMoviesSearchResult && isMoviesAvailable ? (
        <div className={classes.noMovies}>
          <span className="title">{`No results with '${searchbleString}'`}</span>
          <img className={classes.emoji} alt="emoji" src={emoji} />
          <span className="subtitle">Try something else.</span>
        </div>
      ) : null}
      {isPending && isMoviesSearchResult && activeCategory === 'All' ? (
        <div className={classes.preloader}>
          <SmallLoader />
        </div>
      ) : null}
      {isRejected && isMoviesSearchResult && activeCategory === 'All' ? (
        <div className={classes.preloader}>More movies coming soon</div>
      ) : null}
    </div>
  );
};
