import React from 'react'
import styled from 'styled-components'
import { ToggleAdminPanel, HeaderTitle } from './components'

export function Header() {
	return (
		<StyledHeader className="Workspace-header">
			<div className="Workspace-headerbrand">
				<ToggleAdminPanel/>
			</div>
			<div className="Workspace-headertitle">
				<HeaderTitle/>
			</div>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	display: grid;
	grid-template-columns: 9.0rem auto;
	/* grid-template-rows: 100vh; */
	grid-template-areas: "workspaceheaderbrand workspaceheadertitle";

	div.Workspace-headerbrand { grid-area: workspaceheaderbrand; }
	div.Workspace-headertitle { grid-area: workspaceheadertitle; }

	div.Workspace-headerbrand, 
	div.Workspace-headertitle {
		margin: 0rem 0rem 0rem 0rem;
		padding: 1.5rem 0rem 1.5rem 0rem;
	}

	margin-bottom: 3.0rem;

	/* 
	div.Workspace-headerbrand { background: yellow; }
	div.Workspace-headertitle { background: red; } 
	*/
`