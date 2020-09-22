import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      display: 'grid',
      justifyItems: 'center',
      alignItems: 'center',
      height: '100%',
      overflow: 'auto',
      padding: theme.spacing(3),
      boxSizing: 'border-box',
    },
    noEmpty: {
      gridGap: '20px 20px',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gridAutoRows: 'max-content',
    },
    noMovies: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      '& .title': {
        fontSize: '70px',
        color: 'white',
      },
      '& .subtitle': {
        fontSize: '36px',
        color: 'white',
      },
    },
    emoji: {
      margin: '50px 0',
      height: '100px',
    },
    preloader: {
      width: '100%',
      height: '170px',
      background: '#182227',
      display: 'grid',
      color: 'white',
      justifyContent: 'center',
      alignContent: 'center',
    },
  }),
);
