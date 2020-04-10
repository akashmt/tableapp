import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Website from '../../website/Website'
import Authentication from '../../authentication/Authentication'
import Workspace from '../../workspace/Workspace'

export function AppRoutes() {
	return (
		<Switch>
			<Route exact path="/" component={Website} />
			<Route exact path="/auth" component={Authentication} />
			<Route path="/workspace" component={Workspace} />
			{/* <Route component={PageNotFound} /> */}
		</Switch>
	)
}