import React from 'react'
import styled from 'styled-components'
import { FaEdit } from "react-icons/fa";
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class EditCell extends React.Component {
	state = {
    beatles: beatlesData,
    columns: Object.keys(beatlesData[0]),
    editCell: ''
  }

  handleSave = () => {
    this.setState({editCell: ''})
    console.log(this.state.beatles)
  }

  handleBeatleTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    console.log(item)

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

  editableCell = (id,col) => {
    this.setState({editCell: col+'_'+id})
  }

 

	render() {
    const { beatles, columns, editCell } = this.state
    
    
		return (
      <StyleTable>
        <Table>
          <Caption>
              Edit Table Cell <br/>
              <button onClick={this.handleSave}>Save</button>
          </Caption>
          <THead>
            <TR>
              {columns.map((col, index) => (
                <TH key={index}>{col}</TH>
              ))}
            </TR>
          </THead>
          <TBody>
            {beatles.map((beatle, index) => (
                <TR key={index}>
                  {columns.map((col, index) => (

                  <TD key={index} onDoubleClick={()=>this.editableCell(beatle.id, col)}>
                    {editCell === col+'_'+beatle.id ?
                      <input type='text' name={col} id={beatle.id} defaultValue={beatle[col]} onChange={(evt)=>this.handleBeatleTable(evt)}/>
                    : <> {beatle[col]}  <span onClick={()=>this.editableCell(beatle.id, col)} className="editIcon"><FaEdit/></span> </>
                    }
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
    span.editIcon {
      float: right;
      cursor: pointer;
    }
  }
` 
