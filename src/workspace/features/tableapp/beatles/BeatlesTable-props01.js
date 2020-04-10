import React from 'react'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../components'

export class BeatlesTable extends React.Component {
	render() {
		const beatles = [
			{ id: 1, firstname: "John", lastname: "Lennon" },
			{ id: 2, firstname: "Paul", lastname: "McCarthy" },
			{ id: 3, firstname: "George", lastname: "Harrison" },
			{ id: 4, firstname: "Ringo", lastname: "Star" }
		]
		const beatleslist = beatles.map((beatle, index) => {
			return ( <TR key={index}><TD>{beatle.firstname} {beatle.lastname}</TD></TR> )
		})
		return (
			<Table>
				<Caption>The Beatles</Caption>
				<THead>
					<TR>
						<TH>Band Member</TH>
					</TR>
				</THead>
				<TFoot>
					<TR>
						<TH>(c) footer</TH>
					</TR>
				</TFoot>
				<TBody>
					{beatleslist}
				</TBody>
			</Table>
		)
	}
}
