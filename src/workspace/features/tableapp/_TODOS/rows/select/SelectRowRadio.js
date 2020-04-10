import React from 'react'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class SelectRowRadio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      header: false,
      beatles: beatlesData,
      fields: {}
    };
  }

  handleSave = () => {
    console.log("Selected Rows data: ", this.state.fields)
    console.log("Filtered Rows: ", this.state.beatles[this.state.fields.index]) 
  }

  handleReset = () => {
    this.setState({
      fields: '',
      beatles: beatlesData,
    })
  }

  handleChangeRadioFields = (idx) => {
    let newState = {
        index: idx,
    }
    this.setState({fields: newState})
  }

	render() {
    const { beatles, fields } = this.state
    console.log(fields)
    
    const beatleslist = beatles.map((beatle, index) => {
      return ( 
        <TR key={index}>
          <TD><input type="radio" name="name1" value={index} onChange={(e) => this.handleChangeRadioFields(index)} checked={fields.index === index} /></TD>
          <TD>{beatle.firstname} {beatle.lastname}</TD>
          <TD>{beatle.status}</TD>
        </TR>
      )
    })
    
		return (
			<Table>
				<Caption>
          Selected Rows Result <br />
          <button onClick={this.handleReset}>Reset</button>
          <button onClick={this.handleSave}>Save</button>
        </Caption>
				<THead>
					<TR>
            <TH>###</TH>
						<TH>Band Member</TH>
            <TH>Status</TH>
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