import { css } from 'styled-components'

//** Use */
// import { ViewportAbove } from '../utilities'
// 	${ViewportAbove.medium`color: green;`}

const mediaqueries = {
	xsmall: 320,
	small: 560,
	medium: 960,
	large: 1140,
	xlarge: 1400
}

// acc = accumulator - ViewportAbove (mobile first)
export const ViewportAbove = Object.keys(mediaqueries).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${mediaqueries[label]}px) {
			${css(...args)}
		}
	`
	return acc;
}, {})

export const ViewportBelow = Object.keys(mediaqueries).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${mediaqueries[label]}px) {
			${css(...args)}
		}
	`
	return acc;
}, {})