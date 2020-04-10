import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export function MainNavigation() {
	return (
		<StyledUL>
			<li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
			<li><NavLink exact to="/auth" activeClassName="active">Auth</NavLink></li>
			<li><NavLink exact to="/workspace" activeClassName="active">Workspace</NavLink></li>	
			<li><NavLink exact to="/tableapp" activeClassName="active">Tableapp</NavLink></li>
			<li><NavLink exact to="/tabledemo" activeClassName="active">Tabledemo</NavLink></li>	
		</StyledUL>
	)
}

const StyledUL = styled.ul`
	display: flex;
	margin: 0rem;
	padding: 0rem;
	list-style: none;
	li {
		margin-right: 1rem;
		&:last-of-type { margin-right: 0rem; }
		a {
			&:hover { }
			&.active { font-weight: bold; }
		}
	}
`