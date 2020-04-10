import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, PageNotFound } from '../../website/pages'

export function WebsiteRoutes() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route component={PageNotFound} />
		</Switch>
	)
}