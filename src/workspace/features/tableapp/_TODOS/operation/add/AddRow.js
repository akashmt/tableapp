import React from 'react'
import styled from 'styled-components'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class AddRow extends React.Component {
	state = {
    beatles: beatlesData,
    columns: Object.keys(beatlesData[0])
  }

  handleSave = () => {
    console.log(this.state.beatles)
  }

  handleAddEvent() {
    var id = (this.state.beatles).length + 1;
    var beatle = {
      id: id,
      firstname: "",
      lastname: "",
      status: "",
      active: "false",
      salary: "" ,
      age: ""

    }
    this.state.beatles.push(beatle);
    this.setState({beatles: this.state.beatles});
  }

  handleBeatleTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };

    var beatles = this.state.beatles.slice();
    var newBeatles = beatles.map(function(beatle) {

    for (var key in beatle) {
      if (key === item.name && beatle.id === parseInt(item.id)) {
        beatle[key] = item.value;
      }
    }
    return beatle;
  });
    this.setState({beatles:newBeatles});
  };
  
 

	render() {
    const { beatles, columns } = this.state
    
    
		return (
      <StyleTable>
        <Table>
          <Caption>
              Add New Table Row <br/>
              <button type="button" onClick={() => this.handleAddEvent()}>Add Row</button> <button type="button" onClick={() => this.handleSave()}>Save</button>
          </Caption>
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

                  <TD>
                    <input type='text' name={col} id={beatle.id} defaultValue={beatle[col]} onChange={(evt)=>this.handleBeatleTable(evt)}/>
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
