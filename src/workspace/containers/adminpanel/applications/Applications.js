import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppsNavigation } from '../../../app/navigation'

export const Applications = ({ children }) => {
	return (
		<nav className="Apps-nav">
			<AppsNavigation>
				{/* <li>OnDuty</li> */}
				<li><NavLink to="/">OS</NavLink></li>
				<li><NavLink to="/">OA</NavLink></li>
			</AppsNavigation>
			<AppsNavigation>
				{/* <li>XtraDuty</li> */}
				<li><NavLink to="/">XS</NavLink></li>
				<li><NavLink to="/">XA</NavLink></li>
			</AppsNavigation>
		</nav>
	)
}