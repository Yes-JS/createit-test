import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    actions: {
      display: 'grid',
      padding: '20px',
      gridTemplateColumns: 'max-content max-content',
      justifyContent: 'end',
      alignItems: 'center',
      gridGap: '20px',
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      zIndex: 50,
      outline: 'none',
      cursor: 'pointer',
    },
    price: {
      fontSize: 16,
      color: 'white',
    },
    toItunesButton: {
      cursor: 'pointer',
      padding: '14px 20px',
      color: 'white',
      outline: 'none',
      background: 'transparent',
      border: '2px solid #0fcebc',
      transition: 'all 0.1s',
      '&:hover': {
        background: '#0fcebc',
      },
    },
    summary: {
      color: '#ffffff9e',
      padding: '0 20px',
      fontSize: '18px',
      lineHeight: '27px',
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
        lineHeight: '21px',
      },
    },
    video: {
      position: 'relative',
    },
    videoShadow: {
      cursor: 'pointer',
      outline: 'none',
      position: 'absolute',
      width: '100%',
      height: '100%',
      boxShadow: 'inset 1px -20px 8px 0px rgb(12 18 21)',
      top: 0,
      left: 0,
      zIndex: 20,
    },
    infoWrapper: {
      position: 'absolute',
      bottom: '12%',
      left: '3%',
    },
    name: {
      fontSize: '6vw',
      color: 'white',
      [theme.breakpoints.up('sm')]: {
        fontSize: 42,
      },
    },
    details: {
      fontSize: '4vw',
      color: '#ffffff9c',
      [theme.breakpoints.up('sm')]: {
        fontSize: 20,
      },
    },
  }),
);
