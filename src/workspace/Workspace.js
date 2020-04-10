import React from 'react'
import styled from 'styled-components'
import { WorkspaceRoutes } from './app/routes'
import { Applications, Settings, Header, Main } from './containers'

export default function Workspace() {
	return (
		<StyledWorkspace className="App-workspace">
			<aside className="AdminPanel-container">
				<Applications/>
				<Settings/>
			</aside>
			<section className="Workspace-container">
				<Header/>
				<Main>
					<WorkspaceRoutes/>
					{ /* Conditional for Apps' Dashboards */ }
				</Main>
			</section>
		</StyledWorkspace>
	)
}

const ADMINPANEL_BG_COLOR = "darkblue"
const WORKSPACE_BG_COLOR = "blue"

const StyledWorkspace = styled.section`
	display: grid;
	grid-template-columns: 12.0rem auto;
	grid-template-rows: 100vh;
	grid-template-areas: 
		"adminpanelcontainer workspacecontainer";

	aside.AdminPanel-container 	{ grid-area: adminpanelcontainer; }
	section.Workspace-container { grid-area: workspacecontainer; }

	aside.AdminPanel-container, 
	section.Workspace-container {
		margin: 0rem 0rem 0rem 0rem;
		padding: 1.5rem 3rem 1.5rem 3rem;
	}

	aside.AdminPanel-container 	{ background: ${ADMINPANEL_BG_COLOR} }
	section.Workspace-container { background: ${WORKSPACE_BG_COLOR} }
`