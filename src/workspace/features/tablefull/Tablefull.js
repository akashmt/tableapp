import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Card } from '../../../appkit'
import { PageTitle } from './components'

import { SimpleTable } from './simpletable'


export const Tablefull = () => {


	return (
		<Card className="Tableapp-container">
			<PageTitle>Tablefull</PageTitle>
      <Switch>
        <Route exact path="/workspace/tablefull" component={SimpleTable} />
		  </Switch>
		</Card>
	)
}