import { createMuiTheme } from '@material-ui/core/styles';

import {
  PRIMARY,
  SECONDARY,
  PRIMARY_VARIANT,
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
      main: '#FFFFFF'
    },
    textSecondary: {
      main: '#FFFFFF'
    }
  },
  typography: {
    h1: {
      color: '#FFFFFF'
    },
    h2: {
      color: '#FFFFFF',
    },
    h3: {
      color: '#FFFFFF'
    },
    h5: {
      color: '#FFFFFF'
    },
    h6: {
      color: '#FFFFFF',
    },
    body1: {
      color: '#FFFFFF',
      opacity: '60%'
    },
    body2: {
      color: '#FFFFFF',
      opacity: '83%'
    },
    body: {
      color: '#FFFFFF',
      padding: 0,
    }
  }
})