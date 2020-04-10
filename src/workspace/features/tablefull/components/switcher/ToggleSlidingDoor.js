import React from 'react'
import styled from 'styled-components'

export function ToggleSlidingDoor() {
	return (
		<StyledDiv>
			<div className="inner">
				<h1>Hey</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores consequuntur quibusdam ea provident assumenda porro praesentium, deserunt fugit placeat.</p>
			</div>
		</StyledDiv>
	)
}

const StyledDiv = styled.div`
	width: 30%;
	background: white;
	border-radius: 10px;
	.inner {
		padding: 1rem;
		width: calc(%100% - 2rem);
		text-align: left;
		background: rgb(7, 218, 165);
		border-radius: 10px;
		cursor: pointer;
		/* Animation */
		clip-path: inset(0% 0% 0% 100%);
		transition: all .5s ease-in-out;
		h1 {
			margin: 0;
			color: white;
		}
		p {
			font-size: .8rem;
			color: white;
		}
	}
	&:hover .inner {
		clip-path: inset(0% 0% 0% 0%);
	}

	/* body {
		margin: 0rem;
		height: 100vh;
		display: grid;
		justify-items: center;
		align-items: center;
		background: #DCF5FF;
	} */
`