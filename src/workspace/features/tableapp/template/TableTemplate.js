import React from 'react'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../components'
import { beatlesData } from '../data/json/beatles'

export class TableTemplate extends React.Component {
	state = {
		beatles: beatlesData
	}

	render() {
		const { beatles } = this.state
		const beatleslist = beatles.map((beatle, index) => {
			return ( 
				<TR key={index}>
					<TD>{beatle.firstname} {beatle.lastname}</TD>
				</TR>
			)
		})
		return (
			<Table>
				<Caption>The Beatles</Caption>
				<THead>
					<TR>
						<TH>Band Member</TH>
					</TR>
				</THead>
				<TBody>
					{beatleslist}
				</TBody>
        <TFoot>
					<TR>
						<TH>(c) footer</TH>
					</TR>
				</TFoot>
			</Table>
		)
	}
}