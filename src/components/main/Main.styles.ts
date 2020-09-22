import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    headerLogo: {
      display: 'grid',
      alignContent: 'center',
      justifyContent: 'start',
      padding: '0 20px',
      fontSize: 36,
      fontWeight: 'bold',
      color: 'white',
    },
    menu: {
      paddingTop: '50px',
    },
    headerContent: {
      [theme.breakpoints.down('xs')]: {
        background: 'rgb(0 0 0 / 21%)',
      },
    },
    main: {
      display: 'grid',
      gridTemplateColumns: 'max-content 1fr',
      gridTemplateRows: '1fr',
      minHeight: '100vh',
      background:
        'radial-gradient(150% 100% at 100% 50%, #354b57 0%, #17222a 100%);',
    },
    contentWrapper: {
      display: 'grid',
      gridTemplateRows: '64px calc(100vh - 64px)',
    },
    content: {
      height: '100%',
    },
  }),
);
