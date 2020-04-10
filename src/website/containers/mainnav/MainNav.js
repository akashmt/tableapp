import React from 'react'
import styled from 'styled-components'
import { MainNavigation } from '../../navigation'

export function MainNav() {
	return (
		<StyledNav>
			<MainNavigation/>
		</StyledNav>
	)
}

const StyledNav = styled.nav`
	padding: 1rem 1rem 1rem 1rem;
	background: #f9f9f9;
`