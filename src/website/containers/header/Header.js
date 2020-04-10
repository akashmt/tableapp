import React from 'react'
import styled from 'styled-components'

export function Header() {
	return (
		<StyledHeader className="App-header">
			<h1>Tableapp Project</h1>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	padding: 1rem 1rem 1rem 1rem;
	background: #f1f1f1;
	h1 {
		margin: 0rem 0rem 0rem 0rem;
		padding: 0rem 0rem 0rem 0rem;
	}
`