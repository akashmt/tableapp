import styled from 'styled-components'

const CIRCLESIZE = "6.0rem"

const BLUE = "blue"
const DARKBLUE = "darkblue"
const SKYBLUE = "skyblue"
const NAVY = "navy"
const WHITE = "white"

const AFTERTOP = "50%";
const AFTERLEFT = "50%";

export const CircleArrow = styled.span`
	position: relative;
	display: inline-block;
	vertical-align: middle;
	width: ${CIRCLESIZE};
	height: ${CIRCLESIZE};
	background: ${DARKBLUE};
	border-radius: 50%;
	transform: rotate(0deg);
	&:after {
		position: absolute;
		content: "";
		top: ${AFTERTOP};
		left: ${AFTERLEFT};
		border: 1.0rem solid transparent;
		border-bottom: 1.6rem solid ${SKYBLUE};
		transform: translateX(-50%) translateY(-85%);
	}
	&:hover {
		background: ${NAVY};
		cursor: pointer;
		&:after { border-bottom: 1.6rem solid ${WHITE}; }
	}

`

export const CircleArrowTop = styled(CircleArrow)`
	transform: rotate(0deg);
`

export const CircleArrowRight = styled(CircleArrow)`
	transform: rotate(90deg);
`

export const CircleArrowBottom = styled(CircleArrow)`
	transform: rotate(180deg);
`

export const CircleArrowLeft = styled(CircleArrow)`
	transform: rotate(270deg);
`


