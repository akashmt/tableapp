import React from 'react'
import styled from 'styled-components'
import { Card } from '../../../appkit'
import { HoverInfoPanel } from './components'

export function Flex() {
	return (
		<Card className="Flex-container">
			<StyledHeader>
				<div><h2>Flex Support Dashboard</h2></div>
				<div><HoverInfoPanel/></div>
			</StyledHeader>
			<main>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquam doloribus illum minima similique consectetur aspernatur voluptas officiis. Libero, accusantium. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, molestias.</p>
			</main>
		</Card>
	)
}

const StyledHeader = styled.header`
	display: flex;
	flex-direction: row;
	
	h2 { }
	div.inner { margin-top: -3.0rem; }
`