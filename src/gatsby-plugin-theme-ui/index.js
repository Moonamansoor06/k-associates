

const theme = {


    space: [
        0,
        4,
        8,
        16,
        32,
        64,
        128,
        256,
        512
    ],
    fonts: {

        body: 'Verdana, sans-serif',
        heading: 'Georgia, serif',
        monospace: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
    },
    fontSizes: [
        12,
        14,
        16,
        20,
        24,
        32,
        48,
        64,
        96
    ],
    fontWeights: {

        body: 400,
        heading: 700,
        bold: 700
    },
    lineHeights: {

        body: 1.5,
        heading: 1.125,
        normal: 1,
        minimum: .5
    },
    textDecorations:{
        navActive:'underline'
    },
    config: {
        initialColorModeName: 'light',
    },
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#07c',
        hoverColor:'gray',
        activeLink:'	#5c5c3d',
        modes: {
            dark: {
                text: '#fff',
                background: '#000',
                primary: '#0cf',
            }
        }
    },
    cards: {
        primary: {
          padding: 2,
          borderRadius: 4,
          boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
        },
        compact: {
          padding: 2,
          margin:2,
          borderRadius: 2,
          border: '1px solid gray',
          borderColor: 'muted',
          boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
            
        },
      },
    styles: {
        root: {

            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body'
        },
        h1: {

            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 5
        },
        h2: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 4
        },
        h3: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 3
        },
        h4: {
            color: 'main',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 2
        },
        h5: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'minimum',
            fontWeight: 'heading',
            fontSize: 1
        },
        h6: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 0
        },
        p: {
            color: 'text',
            fontFamily: 'body',
            fontWeight: 'body',
            lineHeight: 'body'
        },
        a: {
            color: 'primary',
            textDecoration:'navActive'
        },
        pre: {
            fontFamily: 'monospace',
            overflowX: 'auto',
            code: {
                color: 'inherit'
            }
        },

        img: {
            maxWidth: '100%'
        },
      
    }
}


export default theme