import React from 'react'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class RangeSelector extends React.Component {
	state = {
    beatles: beatlesData,
    rangeOption: 1000
  }
  
  handleRange = (optionEvent) => {
    let beatlesCopy = beatlesData
    let rangeValue = optionEvent.target.value
    this.setState({rangeOption: rangeValue})
    let searchRecords = beatlesCopy.filter((beatle) => {
      return (
        beatle.salary <= rangeValue &&  beatle.salary >=1000
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
          <TD>{beatle.salary}</TD>
				</TR>
			)
		})
		return (
			<Table>
				<Caption>
          Range Salary Filter <br />
          <input type="range" min="1000" max="3000" value={this.state.rangeOption} class="slider" id="myRange" onChange={this.handleRange} /> <br/>
          <strong>Range: 1000-{this.state.rangeOption}</strong>
        </Caption>
				<THead>
					<TR>
						<TH>Band Member</TH>
            <TH>Status</TH>
            <TH>Salary</TH>
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