import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({      
  typography: {
    button: {
      textTransform: 'none'
    },
   "@global": {
      "html, body": {
        margin: 0,
        padding: 0
      }
      }
  }
});

export default theme;