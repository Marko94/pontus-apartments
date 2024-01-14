export const customTheme = {
  palette: {
    primary: {
      main: '#326273',
      light: '#5C9ead',
      dark: '#1c2a3e',
      contrastText: '#000000',
    },
    secondary: {
      main: '#b3965a',
      light: '#c2ab7a',
      dark: '#8f7848',
      contrastText: '#FFFFFF',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              backgroundColor: '--primary',
              color: '#FFF',
            }),
        }),
      },
    },
  },
};