import React from 'react'
import styled from 'styled-components'

export const ToggleHoverPanel = () => {

  const handlePanel = () => {
    let panel = document.getElementById('click-panel');
    panel.classList.toggle('hover');
  }
	return (
		<StyledDiv>
			<div className="inner">
				<span>i</span>
				<h4>Hey Hover Me</h4>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores consequuntur quibusdam ea provident assumenda porro praesentium, deserunt fugit placeat.</p>
			</div>
      <div className="inner1" id="click-panel" onClick={handlePanel}>
				<span>i</span>
				<h4>Hey Click Me</h4>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores consequuntur quibusdam ea provident assumenda porro praesentium, deserunt fugit placeat.</p>
			</div>
		</StyledDiv>
	)
}

const StyledDiv = styled.div`
  position: relative;
	.inner, .inner1 {
    position: absolute;
		padding: 1em;
		width: 250px;
		text-align: left;
		background: rgb(9, 201, 153);
		border-radius: 10px;
		cursor: pointer;
		/* Animation */
		clip-path: circle(10% at 90% 20%);
		transition: all .5s ease-in-out;
		h4 {
			margin: 0rem;
			color: white;
		}
		p {
			font-size: .8rem;
			color: white;
		}
		span {
			position: relative;
			float: right;
			/* margin-top: 1%; */
			margin-right: 4%;
			font-weight: bold;
			font-size: 1.2rem;
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
  .inner1 {
    top: 50px;
    &.hover {
      clip-path: circle(75%);
      background: #00B6FF;  
    }
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