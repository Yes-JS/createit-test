import React, { useRef, useState } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import StarsIcon from '@material-ui/icons/Stars';
import classNames from 'classnames';
import { getMovies } from 'models/movies';
import { Card } from 'components/movieCard';
import { MovieDetails } from 'components/movieDetails';
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
import { Entry } from 'schemas/movieList';
import { useStyles } from './Home.styles';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Home = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { movies } = useMoviesDataSelector();
  const activeCategory = useActiveCategorySelector();
  const searchbleString = useSearchbleStringSelectorSelector();
  const isPending = useMoviesIsPendingSelector();
  const isRejected = useMoviesIsRejectedSelector();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [movieToDetails, setMovieToDetails] = useState<Entry | null>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const isMoviesAvailable = movies.length;
  const movieCardWidth = 300;
  const movieCardHeight = 170;

  const moviesToShow = movies.filter(
    (movie) =>
      (movie.category.attributes.term === activeCategory ||
        activeCategory === 'All') &&
      (searchbleString === '' ||
        movie['im:name'].label
          .toLowerCase()
          .includes(searchbleString.toLowerCase())),
  );
  const isMoviesSearchResult = !!moviesToShow.length;

  const getRandomMivie = () => {
    return moviesToShow[Math.floor(Math.random() * moviesToShow.length)];
  };

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

  const openMovieDetails = (movie: Entry) => {
    setMovieToDetails(movie);
    setModalIsOpen(true);
  };

  const closeMovieDetails = () => {
    setMovieToDetails(null);
    setModalIsOpen(false);
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
            <Card
              cardClick={() => openMovieDetails(movie)}
              key={movie.id.attributes['im:id']}
              movie={movie}
            />
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
      <Dialog
        open={modalIsOpen}
        TransitionComponent={Transition}
        onClose={closeMovieDetails}
      >
        <DialogContent
          classes={{
            root: classes.modalContent,
          }}
        >
          <MovieDetails
            movie={movieToDetails}
            closeHandler={closeMovieDetails}
          />
        </DialogContent>
      </Dialog>
      {isMoviesSearchResult && moviesToShow.length > 1 ? (
        <button
          type="button"
          className={classes.randomButton}
          onClick={() => openMovieDetails(getRandomMivie())}
        >
          <StarsIcon />
          <span>Random movie</span>
        </button>
      ) : null}
    </div>
  );
};
