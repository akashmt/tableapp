import React from 'react'
import styled from 'styled-components'

export const HoverInfoPanel = () => {
	return (
		<StyledDiv>
			<div className="inner">
				<span>i</span>
				<h4>Hey Hover Me</h4>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores consequuntur quibusdam ea provident assumenda porro praesentium, deserunt fugit placeat.</p>
			</div>
		</StyledDiv>
	)
}

const StyledDiv = styled.div`
	position: relative;
	.inner {
		position: absolute;
		padding: 1.5em;
		width: 250px;
		text-align: left;
		background: rgb(9, 201, 153);
		border-radius: 1.0rem;
		cursor: pointer;

		/* Animation */
		clip-path: circle(10% at 90% 20%);
		transition: all .5s ease-in-out;
		h1 {
			margin: 0rem;
			font-size: 1.4rem;
			color: WHITE;
		}
		p {
			font-size: 1.2rem;
			color: WHITE;
		}
		span {
			position: relative;
			float: right;
			margin-top: -4%;
			margin-right: -1.5%;
			font-weight: bold;
			font-size: 3rem;
			color: white;
			transition: color .5s;
		}
		&:hover span {
			color: rgba(255, 255, 255, .5)
		}
	}

	.inner:hover {
		clip-path: circle(75%);
		background: #00B6FF;
	}

`