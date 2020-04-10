import React from 'react'
import styled from 'styled-components'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'
import { ResizableColumns } from './ResizableColumns'

export class ResizeColumnWidth extends React.Component {
	state = {
    beatles: beatlesData,
    columns: Object.keys(beatlesData[0])
  }
  
  componentDidMount() {
    ResizableColumns()
  }

	render() {
    const { beatles, columns } = this.state
    
		return (
      <StyleTable>
        <Table>
          <Caption>Resize Column Width</Caption>
          <THead>
            <TR>
              {columns.map((col, index) => (
                <TH>{col}</TH>
              ))}
            </TR>
          </THead>
          <TBody>
            {beatles.map((beatle, index) => (
                <TR key={index}>
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
` 
