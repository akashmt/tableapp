import React from 'react'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class DropDownBoolean extends React.Component {
	state = {
		beatles: beatlesData
  }
  
  handleSelectOption = (optionEvent) => {
    let beatlesCopy = beatlesData
    let searchString = optionEvent.target.value
    let searchRecords = beatlesCopy.filter((beatle) => {
      return (
        beatle.active === searchString
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
				</TR>
			)
		})
		return (
			<Table>
				<Caption>
          DropDown Boolean (Active filter) <br />
         <select onChange={this.handleSelectOption}>
          <option value="">Choose Active</option>
           <option value="true">True</option>
           <option value="false">False</option>
         </select>
        </Caption>
				<THead>
					<TR>
						<TH>Band Member</TH>
            <TH>Status</TH>
            <TH>Active</TH>
					</TR>
				</THead>
				<TBody>
					{beatleslist}
				</TBody>
        <TFoot>
					<TR>
						<TH colSpan="3">(c) footer</TH>
					</TR>
				</TFoot>
			</Table>
		)
	}
}