import React from 'react'
import styled from 'styled-components'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class FreezeColumn extends React.Component {
	state = {
    beatles: beatlesData,
    columns: Object.keys(beatlesData[0])
  }

	render() {
		const { beatles, columns } = this.state
		
		return (
      <StyledTable>
        <Table>
          <Caption>Freeze Column Demo</Caption>
          <THead>
            <TR>
              {columns.map((col,index) => (
                  <TH key={index}>{col}</TH>
              ))}
            </TR>
          </THead>
          <TBody>
            {beatles.map(beatle => (
                <TR key={beatle.id}>
                  {columns.map((col,index) => (
                    <TD key={index} >
                      {beatle[col]}
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
      </StyledTable>
		)
	}
}

const StyledTable = styled.div`
  overflow-x: scroll;
  width: 300px;
  margin: 0 0 0 12em;
  thead tr th:nth-of-type(1),
  tbody tr td:nth-of-type(1) {
    position: absolute;
    width: 6em;
    margin-left: -12em;
  }
  thead tr th:nth-of-type(2),
  tbody tr td:nth-of-type(2) {
    position: absolute;
    width: 7em;
    margin-left: -6em;
  }
`





