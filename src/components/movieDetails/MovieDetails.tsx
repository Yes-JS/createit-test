import React, { useRef } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import CloseIcon from '@material-ui/icons/Close';
import { Entry } from 'schemas/movieList';
import { useStyles } from './MovieDetails.styles';

interface ICardProps {
  movie: Entry | null;
  closeHandler: () => void;
}

export const MovieDetails: React.FunctionComponent<ICardProps> = ({
  movie,
  closeHandler,
}) => {
  const classes = useStyles();
  const movieWrapper = useRef<HTMLVideoElement>(null);

  const releaseDate = new Date(movie ? movie['im:releaseDate'].label : 0);
  const releaseYear = releaseDate.getFullYear();
  const genre = movie?.category.attributes.term;

  return (
    <div>
      <div className={classes.video}>
        <video playsInline loop ref={movieWrapper} width="100%" autoPlay>
          <source src={movie?.link[1].attributes.href} type="video/mp4" />
          <track default kind="captions" />
          Your browser does not support the video tag.
        </video>
        <ButtonBase
          focusRipple
          onClick={() =>
            movieWrapper?.current?.paused
              ? movieWrapper?.current?.play()
              : movieWrapper?.current?.pause()
          }
          className={classes.videoShadow}
        />
        <div className={classes.infoWrapper}>
          <span className={classes.name}>
            {movie ? movie['im:name'].label : ''}
          </span>
          <br />
          <span className={classes.details}>{`${releaseYear}, ${genre}`}</span>
        </div>
      </div>
      <div className={classes.summary}>{movie?.summary.label}</div>
      <div className={classes.actions}>
        <span className={classes.price}>
          {movie ? movie['im:price'].label : ''}
        </span>
        <button
          type="button"
          className={classes.toItunesButton}
          onClick={() => window.open(movie?.link[0].attributes.href)}
        >
          View in ITunes
        </button>
      </div>
      <div
        role="button"
        tabIndex={0}
        className={classes.closeButton}
        onClick={closeHandler}
      >
        <CloseIcon />
      </div>
    </div>
  );
};
