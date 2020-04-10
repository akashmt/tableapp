import React from 'react'
import styled from 'styled-components'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class SelectRow extends React.Component {
	state = {
    beatles: beatlesData,
    columns: Object.keys(beatlesData[0]),
    selectedRow: ''
  }

  handleHighlightRow = (index) => {
    this.setState({selectedRow: index})
  }



	render() {
    const { beatles, columns, selectedRow } = this.state
    
		return (
      <StyleTable>
        <Table id="table">
          <Caption>Highlight Selected Table Row</Caption>
          <THead>
            <TR>
              {columns.map((col, index) => (
                <TH>{col}</TH>
              ))}
            </TR>
          </THead>
          <TBody>
            {beatles.map((beatle, index) => (
                <TR onClick={() => this.handleHighlightRow(index)} key={index} className={(selectedRow === index) ? 'highlight' : ''}>
                  {columns.map((col, index) => (
                  <TD>{beatle[col]}</TD>
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
      </StyleTable>
		)
	}
}

const StyleTable = styled.div`
  td, th {
    border: 0.1rem solid #e1e1e1;
    padding: 1.2rem 1.5rem;
  }
  tr.highlight {
    background-color: Green;
  }
` 
