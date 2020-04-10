import styled, { css } from 'styled-components'
/* export const SubHeadingBase = css`` */

export const HTMLBody = css`
	*,
	*:after,
	*:before { box-sizing: inherit; }
	
	html {
		box-sizing: border-box;
		font-size: 62.5%;
	}

	body {
		color: #232323;
		font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
		font-size: 1.6em;
		font-weight: 300;
		letter-spacing: .01em;
		line-height: 1.6;
	}
`

export const HTMLBodyExtended = styled.h1`
	${HTMLBody}
`