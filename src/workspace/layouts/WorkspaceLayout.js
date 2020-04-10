import React from 'react'
import styled from 'styled-components'
import { Applications, Settings } from '../containers'

export const WorkspaceLayout = ({children}) => {
	return (
		<StyledWorkspaceLayout className="App-workspace">
			<aside className="AdminPanel-container">
				<Applications/>
				<Settings/>
			</aside>
			<section className="Workspace-container">
				{children}
			</section>
		</StyledWorkspaceLayout>
	)
}

const ADMINPANEL_BG_COLOR = "darkblue"
const WORKSPACE_BG_COLOR = "blue"

const StyledWorkspaceLayout = styled.section`
	display: grid;
	grid-template-columns: 12.0rem auto;
	grid-template-rows: 100vh;
	grid-template-areas: "adminpanelcontainer workspacecontainer";

	aside.AdminPanel-container 	{ grid-area: adminpanelcontainer; }
	section.Workspace-container 	{ grid-area: workspacecontainer; }

	aside.AdminPanel-container, 
	section.Workspace-container {
		margin: 0rem 0rem 0rem 0rem;
		padding: 1.5rem 3rem 1.5rem 3rem;
	}

	aside.AdminPanel-container 	{ background: ${ADMINPANEL_BG_COLOR} }
	section.Workspace-container { background: ${WORKSPACE_BG_COLOR} }
`