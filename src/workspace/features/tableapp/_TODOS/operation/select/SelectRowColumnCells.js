import React from 'react'
import styled from 'styled-components'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class SelectRowColumnCells extends React.Component {
	state = {
    beatles: beatlesData,
    columns: Object.keys(beatlesData[0])
  }

  componentDidMount() {

    var table = document.getElementById('table');
    var isMouseDown = false;
    var startRowIndex = null;
    var startCellIndex = null;

    function selectTo(cell) {
 
      var row = cell.parentNode;    
      var cellIndex = cell.cellIndex;
      var rowIndex = row.rowIndex;
      
      var rowStart, rowEnd, cellStart, cellEnd;
      
      if (rowIndex < startRowIndex) {
          rowStart = rowIndex;
          rowEnd = startRowIndex;
      } else {
          rowStart = startRowIndex;
          rowEnd = rowIndex;
      }
      
      if (cellIndex < startCellIndex) {
          cellStart = cellIndex;
          cellEnd = startCellIndex;
      } else {
          cellStart = startCellIndex;
          cellEnd = cellIndex;
      }        
     
      for (var i = rowStart; i <= rowEnd; i++) {
          var rowCells = table.querySelectorAll("tr")[i].querySelectorAll("td");
          for (var j = cellStart; j <= cellEnd; j++) {
              rowCells[j].classList.add("selected");
          }    
      }
    }
   
    table.querySelectorAll("td").forEach(evt => evt.addEventListener("mousedown", function(e) {
  
        isMouseDown = true;
        var cell = evt;
    
        const element =  table.querySelectorAll(".selected")
        if (typeof (element) !== 'undefined' && element != null && element.length > 0) {
          for (var i=0; i<element.length;i++){
           element[i].classList.remove("selected");
          }
        }
        
        if (e.shiftKey) {
            selectTo(cell);                
        } else {
            cell.classList.add("selected");
            startCellIndex = cell.cellIndex;
            startRowIndex =  cell.parentNode.rowIndex;
        }
        
        e.preventDefault()
    }))

    table.querySelectorAll("td").forEach(evt => evt.addEventListener("mouseover", function() {
        if (!isMouseDown) return;

        const element =  table.querySelectorAll(".selected")
        if (typeof (element) !== 'undefined' && element != null && element.length > 0) {
          for (var i=0; i<element.length;i++){
           element[i].classList.remove("selected");
          }
        }
        selectTo(evt);
        
    }))

    document.addEventListener('mouseup', () => {
      isMouseDown = false;
    });
  }


	render() {
    const { beatles, columns } = this.state
    
		return (
      <StyleTable>
        <Table id="table">
          <Caption>Highlight Selected Table Cell</Caption>
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
    &.selected {
      background-color: green;
    }
  }
` 
