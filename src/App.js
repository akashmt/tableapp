import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppGlobalStyles } from './appkit/global'
import { AppRoutes } from './app/routes'

export default function App() {
	return (
		<Router>
		<div className="App">
			<AppGlobalStyles/>
			<AppRoutes/>
		</div>
		</Router>
	)
}