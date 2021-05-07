import { createMuiTheme } from '@material-ui/core/styles';

import {
  PRIMARY,
  SECONDARY,
  PRIMARY_VARIANT,
  FONT
} from './colors';

export default createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY
    },
    secondary: {
      main: SECONDARY 
    },
    primaryVariant: {
      main: PRIMARY_VARIANT
    },
    textPrimary: {
      main: FONT
    },
    textSecondary: {
      main: FONT
    }
  },
  typography: {
    h1: {
      color: FONT
    },
    h2: {
      color: FONT
    },
    h3: {
      color: FONT
    },
    h5: {
      color: FONT
    },
    h6: {
      color: FONT,
    },
    body1: {
      color: FONT,
      opacity: '60%'
    },
    body2: {
      color: FONT,
      opacity: '83%'
    },
    body: {
      color: FONT,
      padding: 0,
    }
  }
})