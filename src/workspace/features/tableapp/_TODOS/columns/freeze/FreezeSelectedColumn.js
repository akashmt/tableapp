import React from 'react'
import styled from 'styled-components'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class FreezeSelectedColumn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beatles: beatlesData,
      fields: Object.keys(beatlesData[0]).map((d, i) => { return {checked: false, data: d} } )
    };
  }


  handleChangeCheckBoxFields = (beatle, index) => {
    let newState = this.state.fields
    newState[index] = {
        checked: !newState[index].checked,
        data: beatle
    }

    if(newState[index].checked === true) {
      newState = newState.sort((a,b) => {
        return  b.checked - a.checked
      });
      this.setState({fields: newState})

    } else {
      newState = newState.sort((a,b) => {
        return  b.checked - a.checked
      });
      this.setState({fields: newState})
    }
  }




	render() {
    const { beatles, fields } = this.state
    console.log(fields)
    
		return (
      <StyledTable>
        <Table>
          <Caption>
            Selected Columns Freeze <br />
          </Caption>
          <THead>
            <TR>
              {fields.map((col,index) => (
                <TH className={col.checked ? `freeze freeze_${index}` : ''}>
                  {col.data} <br/>
                  <input type="checkbox" name="name1" onChange={() => this.handleChangeCheckBoxFields(col.data, index)} checked={col.checked} />
                </TH>
              ))}
            </TR>
          </THead>
          <TBody>
            {beatles.map(beatle => (
              <TR key={beatle.id}>
                {fields.map((col, idx) => (
                  <TD className={col.checked ? `freeze freeze_${idx}` : ''} key={idx}>
                    {beatle[col.data]}
                  </TD>
                ))}
              </TR>
            ))}
          </TBody>
          <TFoot>
            <TR>
              <TH colSpan={fields.length}>(c) footer</TH>
            </TR>
          </TFoot>
        </Table>
      </StyledTable>
		)
	}
}

const StyledTable = styled.div`
  overflow-x: scroll;
  width: 400px;
  table {
    table-layout: fixed;
  }
  td, th {
    width: 100px;
  }
  td:first-child, th:first-child {
    padding: 1.2rem 1.5rem;
  }
  .freeze {
    position: sticky;
    background-color: green;
  }
  .freeze_0 {
    left: 0px;
  }
  .freeze_1 {
    left: 100px;
  }
  .freeze_2 {
    left: 200px;
  }
  .freeze_3 {
    left: 300px;
  }
  .freeze_4 {
    left: 400px;
  }
`
