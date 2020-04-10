import React from 'react'
import styled from 'styled-components'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class SelectRowsDrag extends React.Component {
	state = {
    beatles: beatlesData,
    columns: Object.keys(beatlesData[0])
   
  }

  componentDidMount() {

    var table = document.getElementById('table');
    var isMouseDown = false;
   
    
    table.querySelectorAll("tr").forEach(evt => evt.addEventListener("mousedown", function(e) {
        isMouseDown = true;
        // First remove all selected class
        const element =  table.querySelectorAll(".selected")
        if (typeof (element) !== 'undefined' && element != null && element.length > 0) {
          for (var i=0; i<element.length;i++){
            element[i].classList.remove("selected");
          }
        }
        evt.classList.toggle("selected");
        e.preventDefault()
    }))

    table.querySelectorAll("tr").forEach(evt => evt.addEventListener("mouseover", function() {
        if (!isMouseDown) return;
        evt.classList.toggle("selected");
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
              <TH colSpan="7">(c) footer</TH>
            </TR>
          </TFoot>
        </Table>
      </StyleTable>
		)
	}
}

const StyleTable = styled.div`
  tr.selected {
    background-color: green;
  }
` 
