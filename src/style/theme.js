import { hover } from "@testing-library/user-event/dist/hover"

export const mytheme = (mode) => {
    return {
        palette: {
            mode,
            background: {
              default: mode === 'dark' ? '#1B1D20' : '#eeeeee',
              paper: mode === 'dark' ? '#24262B' : '#f5f5f5',
              darker: mode === 'dark' ? '#000000' : '#e0e0e0',
              opacity: 'rgba(180, 180, 180, .8)',
              light: mode === 'dark' ? "#31343C" : "#ffffff",
            },
            // primary: {
            //   main: '#5522C0'
            // },
            secondary: {
              main: '#7336E7'
            },
            default: {
              main: '#909EAB'
            },
            typography: {
              fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
              ].join(','),
            },
            textarea: {
              borderRadius: 3,
              width: '100%',
              height: '35px',
              fontSize: '25px',
              padding: '5px'
            }
          },
          components: {
            MuiButton: {
              styleOverrides: {
                root: {
                  borderRadius: 3,
                  fontSize: 30,
                  textTransform: 'none',
                  fontWeight: 'normal',
                  paddingInline: 25,
                  height: 44,
                  backgroundColor: '#1F88D9',
                },
                contained: {
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#1F88D9'
                  }
                },
                primary: {
                  background: 'none',
                },
                icon:{
                  background:'none',
                  '&:hover': {
                    backgroundColor: '#1F88D9'
                  }
                },
                text: {
                  color: mode === 'dark' ? '#1F88D9' : '#1B1D20',
                  ":hover": {
                  },
                  background: 'none'
                },
                menu: {
                  backgroundColor: mode === 'dark' ? '#17191B' : '#cccccc',
                  fontSize: 12,
                  paddingInline: 4,
                  minWidth: 120,
                  height: 50,
                  fontWeight: 'bold'
                }
              }
            },
            MuiTextareaAutoSize: {
              styleOverrides:{
                root: {
                  borderRadius: 3,
                  width: "100vw",
                  fontSize: 18,
                }
              }
            }
          }
    }
}