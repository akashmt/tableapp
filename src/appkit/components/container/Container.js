import React from 'react'
import styled from 'styled-components'
import { BORDER_RADIUS } from '../../constants'

export const Container = (props) => {
	return (
		<StyledContainer className={props.className}>
			{props.children}
		</StyledContainer>
	)
}

const StyledContainer = styled.section`
	margin: 0rem 0rem 0rem 0rem;
	padding: 3rem 3rem 3rem 3rem;
	color: WHITE;
	background: rgba(0, 26, 136, 0.4);
	border-radius: ${BORDER_RADIUS};
	h1 { font-size: 2.5rem; }
	h2 { font-size: 2.0rem; }
	p {
		&:last-of-type{ margin-bottom: 0rem; }
	}
`