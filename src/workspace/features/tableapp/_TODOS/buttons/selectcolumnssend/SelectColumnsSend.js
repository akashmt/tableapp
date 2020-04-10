import React from 'react'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class SelectColumnsSend extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      header: false,
      beatles: beatlesData,
      columns: Object.keys(beatlesData[0]),
      fields: Object.keys(beatlesData[0]).map((d, i) => { return {checked: false, data: d} } )
    };
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
    let fields = Object.keys(beatlesData[0]).map((d, i) => { return {checked: false, data: d} } )
    this.setState({
      header: false,
      fields: fields,
      beatles: beatlesData,
    })
  }

  handleSend = () => {
    const { fields } = this.state
    console.log("Selected columns data: ", fields)
  }

	render() {
    const { beatles, fields, header, columns } = this.state
    
		return (
			<Table>
				<Caption>
          Select Columns Send button <br />
          <button onClick={this.handleReset}>Reset</button><button onClick={this.handleSend}>Send</button>
        </Caption>
				<THead>
					<TR>
            {columns.map((col,index) => (
              <TH>
                {col} <br/>
                {col === 'id' ?
                  <input type="checkbox" name="name1" onChange={this.handleChangeAllCheckBox} checked={header} />
                :
                  <input type="checkbox" name="name1" onChange={() => this.handleChangeCheckBoxFields(col, index)} checked={fields[index].checked} />
                }
              </TH>
            ))}
					</TR>
				</THead>
				<TBody>
          {beatles.map(beatle => (
            <TR key={beatle.id}>
              {Object.entries(beatle).map(([k, v], idx) => (
                <TD key={v}>
                  {beatle[columns[idx]]}
                </TD>
              ))}
            </TR>
          ))}
				</TBody>
        <TFoot>
					<TR>
						<TH colSpan="7">(c) footer</TH>
					</TR>
				</TFoot>
			</Table>
		)
	}
}