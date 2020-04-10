import React from 'react'
import styled from 'styled-components'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class DeleteRow extends React.Component {
	state = {
    beatles: beatlesData,
    columns: Object.keys(beatlesData[0])
  }

  handleRowDel(beatle) {
    var index = this.state.beatles.indexOf(beatle);
    this.state.beatles.splice(index, 1);
    this.setState({beatles: this.state.beatles});
  };
 

	render() {
    const { beatles, columns } = this.state
    console.log(beatles)
    
		return (
      <StyleTable>
        <Table>
          <Caption>
              Delete Table Row 
          </Caption>
          <THead>
            <TR>
              {columns.map((col, index) => (
                <TH>{col}</TH>
              ))}
              <TH>Delete</TH>
            </TR>
          </THead>
          <TBody>
            {beatles.map((beatle, index) => (
                <TR key={index}>
                  {columns.map((col, index) => (
                  <TD>
                    {beatle[col]}
                  </TD>
                  ))}
                  <TD>
                    <input type="button" onClick={() => this.handleRowDel(beatle)} value="X"/>
                  </TD>
                </TR>
            ))}
          </TBody>
          <TFoot>
            <TR>
              <TH colSpan="8">(c) footer</TH>
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
    input {
      color: WHITE;
    }
  }
` 
