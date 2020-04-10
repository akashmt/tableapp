import React from 'react'
import styled from 'styled-components'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class SelectRowsCheckbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      header: false,
      beatles: beatlesData,
      fields: beatlesData.map((d, i) => { return {checked: false, data: d} } )
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

	render() {
    const { beatles, fields, header } = this.state
    
    const beatleslist = beatles.map((beatle, index) => {
      return ( 
        <TR key={index} className={fields[index].checked ? 'highlight' : ''}>
          <TD><input type="checkbox" name="name1" onChange={() => this.handleChangeCheckBoxFields(beatle, index)} checked={fields[index].checked} /></TD>
          <TD>{beatle.firstname} {beatle.lastname}</TD>
          <TD>{beatle.status}</TD>
        </TR>
      )
    })
    
		return (
      <StyleTable>
        <Table>
          <Caption>
            Highlight Selected Rows
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
      </StyleTable>
		)
	}
}

const StyleTable = styled.div`
  tr.highlight {
    background-color: Green;
  }
` 