import React from 'react'
import styled from 'styled-components'

export const AppsNavigation = ({ children }) => {
	return (
		<StyledUL className="Apps-navigation">
			{children}
		</StyledUL>
	)
}

const APPSNAVTITLE_COLOR = "white"

const APPSNAVITEM_SIZE = "6.0rem"
const APPSNAVITEM_TEXT_SIZE = "1.2rem"
const APPSNAVITEM_TEXT_COLOR = "white"
const APPSNAVITEM_TEXT_COLOR_HOVER = "white"

const APPSNAVITEM_BG_COLOR = "navy"
const APPSNAVITEM_BG_COLOR_HOVER = "blue"

const StyledUL = styled.ul`
	margin: 0rem auto 0rem auto;
	padding: 0rem;
	list-style: none;
	li {
		&:first-of-type { 
			text-align: center;
			color: ${APPSNAVTITLE_COLOR}; 
			background: transparent;
		}
		a {
			display: block;
			margin: 0rem auto;
			width: ${APPSNAVITEM_SIZE};
			height: ${APPSNAVITEM_SIZE};
			line-height: ${APPSNAVITEM_SIZE};
			font-size: ${APPSNAVITEM_TEXT_SIZE};
			color: ${APPSNAVITEM_TEXT_COLOR};
			text-align: center;
			text-transform: uppercase;
			background: ${APPSNAVITEM_BG_COLOR};
			border-radius: 50%;
			&:hover {
				color: ${APPSNAVITEM_TEXT_COLOR_HOVER};
				background: ${APPSNAVITEM_BG_COLOR_HOVER};
			}
		}
	}
`