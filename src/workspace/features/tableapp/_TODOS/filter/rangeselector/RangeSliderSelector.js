import React from 'react'
import 'rc-slider/assets/index.css';
import { Range } from 'rc-slider';
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class RangeSliderSelector extends React.Component {
	state = {
    beatles: beatlesData,
    minRange: 1000,
    maxRange: 1200
  }
  
  handleSliderChange = (optionEvent) => {
    let beatlesCopy = beatlesData
    let rangeValue = optionEvent
    this.setState({minRange: rangeValue[0]})
    this.setState({maxRange: rangeValue[1]})
    let searchRecords = beatlesCopy.filter((beatle) => {
      return (
        beatle.salary >= rangeValue[0] &&  beatle.salary <= rangeValue[1]
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
          Range Slider Salary Filter <br />
          <Range defaultValue={[this.state.minRange, this.state.maxRange]} min={500} max={3000} onChange={this.handleSliderChange} /> <br/>
          <strong>Range: {this.state.minRange}-{this.state.maxRange}</strong>

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