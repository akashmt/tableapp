import React from 'react'
import styled from 'styled-components'
import { Hero, CardOne, CardTwo, CardThree } from './components'

export function Dashboard() {
	return (
		<StyledDashboard className="Dashboard-container">
			<Hero/>
			<CardOne/>
			<CardTwo/>
			<CardThree/>
		</StyledDashboard>
	)
}

const StyledDashboard = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 3rem;
	grid-template-areas: 
		"dashboardhero dashboardhero dashboardhero"
		"dashboardcardone dashboardcardtwo dashboardcardthree";

	section.Dashboard-hero 				{ grid-area: dashboardhero; }
	section.Dashboard-cardone 		{ grid-area: dashboardcardone; }
	section.Dashboard-cardtwo 		{ grid-area: dashboardcardtwo; }
	section.Dashboard-cardthree 	{ grid-area: dashboardcardthree; }

`