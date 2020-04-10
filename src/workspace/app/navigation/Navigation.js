import React from 'react'
import styled from 'styled-components'
import NavList from './NavList'

export const Navigation = ({ children }) => {
	return (
		<>
			<NavList app="OnDuty"/>
			<NavList app="XtraDuty"/>
		</>
	)
}

const StyledNavigation = styled.nav``