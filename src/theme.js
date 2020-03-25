export default {
    breakpoints: ['40em', '52em', '64em'],
    fontSizes: [
      12, 14, 16, 20, 24, 32, 48, 72
    ],
    colors: {
      primary: '#583aff',
      secondary: '#1c144f',
      lightgray: '#9FA4AE'
    },
    space: [
      0, 4, 8, 16, 32, 64, 128, 256
    ],
    fonts: {
        body: '"Apercu", sans-serif',
        heading: '"Apercu", sans-serif',
        text: 'sans-serif'
    },
    fontWeights: {
        body: 400,
        heading: 525,
        bold: 700,
      },
    styles: {
        root: {
          fontFamily: 'body',
          fontWeight: 'body',
        },
    },
    lineHeights: {
      body: 1.5,
      heading: 1.25,
    },
    shadows: {
      small: '0 0 4px rgba(0, 0, 0, .125)',
      large: '0 0 24px rgba(0, 0, 0, .125)'
    },
    variants: {
    },
    text: {
      'hover': {
        color: 'secondary',
      }
    },
    link: {
      textDecoration: 'none',
        color: 'black',
        '&:hover': {
            color: 'primary',
        }
    },
    buttons: {
      primary: {
        m: 3,
        color: 'white',
        bg: 'primary',
        lineHeight: 1.15,
        borderRadius: '0.316rem',
        padding: '.8rem',
        fontFamily: 'body',
        outline: 'none',
        cursor: 'pointer',
        transitionDuration: '0.4s',
        ':hover': {
          bg: '#735ef9'
        }
      },
    },
    forms: {
        input: {
            border: '0px solid',
            borderBottom: '1px solid',
            borderColor: 'lightgray',
            '&:focus': {
                outline: 'none',
                borderColor: 'primary',
            },
            '&:range': {

            }
        },
        select: {
          borderRadius: 9999,
        },
        textarea: {},
        label: {},
        radio: {},
        checkbox: {},
      },
    heading: {
      fontSize: [ 2, 4 ],
      color: 'secondary',
    }
  }