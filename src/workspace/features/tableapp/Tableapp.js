import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Card } from '../../../appkit'
import { PageTitle } from './components'
import { TableTemplate } from './template'


export const Tableapp = () => {


	return (
		<Card className="Tableapp-container">
			<PageTitle>Tableapp</PageTitle>

      {/* <Switch>
        <Route exact path="/workspace/tableapp" component={TableTemplate} />

		  </Switch> */}

		</Card>
	)
}