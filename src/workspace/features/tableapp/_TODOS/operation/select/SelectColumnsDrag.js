import React from 'react'
import styled from 'styled-components'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class SelectColumnsDrag extends React.Component {
	state = {
    beatles: beatlesData,
    columns: Object.keys(beatlesData[0])
  }

  componentDidMount() {

    var table = document.getElementById('table');
    var isMouseDown = false;
   
    
    table.querySelectorAll("td").forEach(evt => evt.addEventListener("mousedown", function(e) {
        isMouseDown = true;
        // First remove all selected class
        const element =  table.querySelectorAll(".selected")
        if (typeof (element) !== 'undefined' && element != null && element.length > 0) {
          for (var i=0; i<element.length;i++){
            element[i].classList.remove("selected");
          }
        }
        var Index = evt.cellIndex;
     
        var rows = table.querySelectorAll('tr');
        for (i=0; i<rows.length; i++){
          var rowCells = rows[i].querySelectorAll("th,td");
          if (typeof (rowCells) !== 'undefined' && rowCells != null && rowCells.length > 0) {
            rowCells[Index].classList.toggle("selected");
          }
        }
        e.preventDefault()
    }))

    table.querySelectorAll("td").forEach(evt => evt.addEventListener("mouseover", function(e) {
        if (!isMouseDown) return;

        var Index = evt.cellIndex;
     
        var rows = table.querySelectorAll('tr');
        for (var i=0; i<rows.length; i++){
          var rowCells = rows[i].querySelectorAll("th,td");
          if (typeof (rowCells) !== 'undefined' && rowCells != null && rowCells.length > 0) {
            rowCells[Index].classList.toggle("selected");
          }
        }
        e.preventDefault()
        
    }))

    document.addEventListener('mouseup', () => {
      isMouseDown = false;
    });

     // Remove selected cell on click outside table
    window.addEventListener('click', function(e){   
      if (document.getElementById('table').contains(e.target)){
        return false;
      } else {
      const element =  table.querySelectorAll(".selected")
        if (typeof (element) !== 'undefined' && element != null && element.length > 0) {
          for (var i=0; i<element.length;i++){
            element[i].classList.remove("selected");
          }
        }
      }
    });

  }



	render() {
    const { beatles, columns } = this.state
    
		return (
      <StyleTable>
        <Table id="table">
          <Caption>Highlight Selected Table Rows</Caption>
          <THead>
            <TR>
              {columns.map((col, index) => (
                <TH>{col}</TH>
              ))}
            </TR>
          </THead>
          <TBody>
            {beatles.map((beatle, index) => (
                <TR>
                  {columns.map((col, index) => (
                  <TD>{beatle[col]}</TD>
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
