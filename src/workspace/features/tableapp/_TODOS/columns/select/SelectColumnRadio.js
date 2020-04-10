import React from 'react'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class SelectColumnRadio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beatles: beatlesData,
      columns: Object.keys(beatlesData[0]),
      fields: {}
    };
  }

  handleChangeRadioFields = (colIdx) => {
    let newState= {
        index: colIdx
    }
    this.setState({fields: newState})
  }

  handleReset = () => {
    this.setState({
      fields: {},
      beatles: beatlesData,
    })
  }

  handleSend = () => {
    const { fields, beatles } = this.state
    console.log("Selected columns data: ", fields)

    const selctedColumn = fields.index && beatles.map((beatle,i) => {
            return <span key={i}>{beatle[fields.index]}</span>
      })

    console.log("Filtered Column: ", selctedColumn) 
  }

	render() {
    const { beatles, fields, columns } = this.state
    
		return (
			<Table>
				<Caption>
          Select Column - radio <br />
          <button onClick={this.handleReset}>Reset</button><button onClick={this.handleSend}>Send</button>
        </Caption>
				<THead>
					<TR>
            {columns.map((col,index) => (
              <TH>
                {col} <br/>
                <input type="radio" name="name1" value={index} onChange={() => this.handleChangeRadioFields(col)} checked={fields.index === col} />
              </TH>
            ))}
					</TR>
				</THead>
				<TBody>
          {beatles.map(beatle => (
            <TR key={beatle.id}>
              {columns.map((col, idx) => (
                <TD key={idx}>
                  {beatle[col]}
                </TD>
              ))}
            </TR>
          ))}
				</TBody>
        <TFoot>
					<TR>
						<TH colSpan={columns.length}>(c) footer</TH>
					</TR>
				</TFoot>
			</Table>
		)
	}
}
