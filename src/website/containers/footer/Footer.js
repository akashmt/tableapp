import React from 'react'
import styled from 'styled-components'

export function Footer() {
	return (
		<StyledFooter className="App-footer">
			<small>2020 (c) Brewcoding</small>
		</StyledFooter>
	)
}

const StyledFooter = styled.footer`
	padding: 1rem 1rem 1rem 1rem;
	background: #f9f9f9;
`