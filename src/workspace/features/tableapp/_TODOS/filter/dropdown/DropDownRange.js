import React from 'react'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class DropDownRange extends React.Component {
	state = {
		beatles: beatlesData
  }
  
  handleSelectOption = (optionEvent) => {
    let beatlesCopy = beatlesData
    let searchString = optionEvent.target.value
    let searchRange = searchString.split('-')
  
    let searchRecords = beatlesCopy.filter((beatle) => {
      return (
        beatle.age >= searchRange[0] && beatle.age <= searchRange[1]
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
          <TD>{beatle.status}</TD>
          <TD>{beatle.active}</TD>
          <TD>{beatle.age}</TD>
				</TR>
			)
		})
		return (
			<Table>
				<Caption>
          DropDown (Age range filter) <br />
         <select onChange={this.handleSelectOption}>
          <option value="">Choose Age Range</option>
           <option value="0-20">Below 20</option>
           <option value="20-30">20 To 30</option>
           <option value="30-100">Above 30</option>
         </select>
        </Caption>
				<THead>
					<TR>
						<TH>Band Member</TH>
            <TH>Status</TH>
            <TH>Active</TH>
            <TH>Age</TH>
					</TR>
				</THead>
				<TBody>
					{beatleslist}
				</TBody>
        <TFoot>
					<TR>
						<TH colSpan="4">(c) footer</TH>
					</TR>
				</TFoot>
			</Table>
		)
	}
}