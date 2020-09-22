import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    type: 'dark',
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        background: '#182227',
        border: '1px solid #414141',
        boxSizing: 'border-box',
        borderRadius: '2px',
        '&$error': {
          borderColor: '#FF0000',
        },
      },
      notchedOutline: {
        border: 'none',
      },
      input: {
        padding: '12px 24px 12px 16px',
      },
      inputMarginDense: {
        padding: '12px 32px 12px 16px',
      },
    },
  },
});
