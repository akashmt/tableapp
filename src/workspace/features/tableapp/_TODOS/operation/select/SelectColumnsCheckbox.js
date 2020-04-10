import React from 'react'
import styled from 'styled-components'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class SelectColumnsCheckbox extends React.Component {
	state = {
    header: false,
    beatles: beatlesData,
    columns: Object.keys(beatlesData[0]),
    fields: Object.keys(beatlesData[0]).map((d, i) => { return {checked: false, data: d} } )
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

	render() {
    const { beatles, fields, header, columns } = this.state

    console.log(fields)
    
		return (
      <StyleTable>
        <Table id="table">
          <Caption>Highlight Selected Table Columns</Caption>
          <THead>
            <TR>
              {columns.map((col, index) => (
                <TH className={fields[index].checked ? 'selected' : ''}>
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
            {beatles.map((beatle, index) => (
                <TR>
                  {columns.map((col, index) => (
                  <TD className={fields[index].checked ? 'selected' : ''} key={index}>{beatle[col]}</TD>
                  ))}
                </TR>
            ))}
          </TBody>
          <TFoot>
            <TR>
              (c) footer
            </TR>
          </TFoot>
        </Table>
      </StyleTable>
		)
	}
}

const StyleTable = styled.div`
  td, th {
    border: 0.1rem solid #e1e1e1;
    padding: 1.2rem 1.5rem;
  }
  td.selected, th.selected {
    background-color: Green;
  }
`