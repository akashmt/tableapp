import { createGlobalStyle  }  from 'styled-components'
/*! AppKit | Milligram v1.3.0 | MIT License |  */

export const AppKitMilligram = createGlobalStyle`
	/* Set box-sizing globally to handle padding and border widths */
	*,
	*:after,
	*:before { box-sizing: inherit; }
	
	/* The base font-size is set at 62.5% for having the convenience
	of sizing rems in a way that is similar to using px: 1.6rem = 16px */
	html {
		box-sizing: border-box;
		font-size: 62.5%;
	}

	/* Default body styles */
	body {
		color: #232323;
		font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
		font-size: 1.6em; /* Currently ems cause chrome bug misinterpreting rems on body element */
		font-weight: 300;
		letter-spacing: .01em;
		line-height: 1.6;
	}
	
	/* body { background: purple; } */
`



