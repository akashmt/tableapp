import React from 'react'
import styled from 'styled-components'

export const Main = ({ children }) => {
	return (
		<StyledMain>
			{children}
		</StyledMain>
	)
}

const StyledMain = styled.main`
	padding: 1rem 1rem 1rem 1rem;
	background: #ffffff;
	h2 {
		margin: 0rem 0rem 1rem 0rem;
		padding: 0rem 0rem 0rem 0rem;
	}
`