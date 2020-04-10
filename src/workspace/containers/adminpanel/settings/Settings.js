import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppsNavigation } from '../../../app/navigation'

export const Settings = ({ children }) => {
	return (
		<nav className="Settings-nav">
			<AppsNavigation>
				{/* <li>Settings</li> */}
				<li><NavLink to="/">Users</NavLink></li>
				<li><NavLink to="/">Theme</NavLink></li>
			</AppsNavigation>
		</nav>
	)
}