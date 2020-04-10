import React from 'react'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class TextMatch extends React.Component {
	state = {
		beatles: beatlesData
  }
  
  handleSearch = (searchEvent) => {
    let beatlesCopy = beatlesData
    let searchString = (searchEvent.target.value).trim().toLowerCase()

    let searchRecords = beatlesCopy.filter((beatle) => {
      return (
        beatle.firstname.toLowerCase().match(searchString) ||
        beatle.lastname.toLowerCase().match(searchString)
      )
    })
    this.setState({beatles: searchRecords})
  
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
				<Caption>
          Text Match <br />
          <input type="search" name="table_search" onChange={this.handleSearch} />
        </Caption>
				<THead>
					<TR>
						<TH>
              Band Member
            </TH>
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