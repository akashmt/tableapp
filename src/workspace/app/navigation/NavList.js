import React from 'react'
import styled from 'styled-components'
import NavItem from './NavItem'

export const Navigation = ({ children }) => {
	return (
		<ul>
			<NavItem name="Support">Support</NavItem>
			<NavItem name="Accounting">Accounting</NavItem>
		</ul>
	)
}

const StyledUL = styled.ul``