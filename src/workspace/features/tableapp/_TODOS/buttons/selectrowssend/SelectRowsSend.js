import React from 'react'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class SelectRowsSend extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      header: false,
      beatles: [],
      fields: []
    };
  }

  componentDidMount() {
    let fields = beatlesData.map((d, i) => { return {checked: false, data: d} } )
    this.setState({
        fields: fields,
        beatles: beatlesData,
    })
  }

  handleChangeAllCheckBox = () => {
    let { header,fields} = this.state
    let newHeader = !header
    let newFields = fields.map((f) => {
      return {
        checked: newHeader,
        data: f.data
      }   
    })
    this.setState({
      fields: newFields,
      header: newHeader
    })
  }

  handleChangeCheckBoxFields = (beatle, index) => {
    let newState = this.state.fields
    newState[index] = {
        checked: !newState[index].checked,
        data: beatle
    }
    this.setState({fields: newState})
  }

  handleReset = () => {
    let fields = beatlesData.map((d, i) => { return {checked: false} } )
    this.setState({
      header: false,
      fields: fields,
      beatles: beatlesData,
    })
  }

  handleSend = () => {
    const { fields } = this.state
    console.log("Selected row data: ", fields)
  }

	render() {
    const { beatles, fields, header } = this.state
    
    const beatleslist = beatles.map((beatle, index) => {
      return ( 
        <TR key={index}>
          <TD><input type="checkbox" name="name1" onChange={() => this.handleChangeCheckBoxFields(beatle, index)} checked={fields[index].checked} /></TD>
          <TD>{beatle.firstname} {beatle.lastname}</TD>
          <TD>{beatle.status}</TD>
        </TR>
      )
    })
    
		return (
			<Table>
				<Caption>
          Selected Rows Result <br />
          <button onClick={this.handleReset}>Reset</button><button onClick={this.handleSend}>Send</button>
        </Caption>
				<THead>
					<TR>
            <TH><input type="checkbox" name="name1" onChange={this.handleChangeAllCheckBox} checked={header} /></TH>
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