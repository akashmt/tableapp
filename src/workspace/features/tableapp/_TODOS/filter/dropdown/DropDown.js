import React from 'react'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class DropDown extends React.Component {
	state = {
		beatles: beatlesData
  }
  
  handleSelectOption = (optionEvent) => {
    let beatlesCopy = beatlesData
    let searchString = optionEvent.target.value
    let searchRecords = beatlesCopy.filter((beatle) => {
      return (
        beatle.status === searchString
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
				</TR>
			)
		})
		return (
			<Table>
				<Caption>
          DropDown (Status catogory filter) <br />
         <select onChange={this.handleSelectOption}>
          <option value="">Choose Status</option>
           <option value="single">Single</option>
           <option value="married">Married</option>
           <option value="divorced">Divorced</option>
         </select>
        </Caption>
				<THead>
					<TR>
						<TH>Band Member</TH>
            <TH>Status</TH>
					</TR>
				</THead>
				<TBody>
					{beatleslist}
				</TBody>
        <TFoot>
					<TR>
						<TH colSpan="2">(c) footer</TH>
					</TR>
				</TFoot>
			</Table>
		)
	}
}