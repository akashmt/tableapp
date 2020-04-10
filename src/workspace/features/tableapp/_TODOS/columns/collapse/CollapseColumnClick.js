import React from 'react'
import styled from 'styled-components'
import { IconContext } from "react-icons";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class CollapseColumnClick extends React.Component {
  state = {
    beatles: beatlesData,
    expandedColumns: [],
  }
  
  toggleColumn = (colId) => {
    const currentExpandedColumns = this.state.expandedColumns;
    const isRowCurrentlyExpanded = currentExpandedColumns.includes(colId);
    
    const newExpandedColumns = isRowCurrentlyExpanded ? 
      currentExpandedColumns.filter(id => id !== colId) : 
      currentExpandedColumns.concat(colId);
    
    this.setState({expandedColumns : newExpandedColumns});
  }

	render() {
    
		const { beatles } = this.state
	  
		return (
      <StyledTable>
        <Table>
          <Caption>Collapse Column Demo</Caption>
          <THead>
            <TR>
              <TH className={this.state.expandedColumns.includes('name') ? 'expanded' : 'collapsed'} onClick={()=>this.toggleColumn('name')}> 
                { this.state.expandedColumns.includes('name') ? 
                    <><FaAngleDoubleLeft/> Band Member</> : 
                    <div class="tooltip"><FaAngleDoubleRight/>
                      <span class="tooltiptext">Band Member</span>
                    </div>
                }
              </TH>
              <TH>Status</TH>
              <TH className={this.state.expandedColumns.includes('age') ? 'expanded' : 'collapsed'} onClick={()=>this.toggleColumn('age')}> 
                { this.state.expandedColumns.includes('age') ? 
                    <><FaAngleDoubleLeft/> Age</> : 
                    <div class="tooltip"><FaAngleDoubleRight/>
                      <span class="tooltiptext">Age</span>
                    </div>
                }
              </TH>
              <TH>Salary</TH>
            </TR>
          </THead>
          <TBody>
            {beatles.map((beatle, index) => {
              return ( 
                <TR key={index}>
                  <TD>
                  { this.state.expandedColumns.includes('name') ?
                    beatle.firstname + beatle.lastname
                  : null
                  }
                  </TD>
                  <TD>{beatle.status}</TD>
                  <TD>
                    { this.state.expandedColumns.includes('age') ?
                      beatle.age
                    : null
                    }
                  </TD>
                  <TD>{beatle.salary} </TD>
                </TR>
              )
            })}
          </TBody>
          <TFoot>
            <TR>
              <TH colSpan="5">(c) footer</TH>
            </TR>
          </TFoot>
        </Table>
      </StyledTable>
    )
	}
}

const StyledTable = styled.div`
  table {
    table-layout: fixed;
  }
  thead tr th {
    width: 150px;
    transition: width 0.1s;
  }
  thead tr th.collapsed {
    width: 50px;
  }
 
  /* Tooltip container */
.tooltip {
  cursor: pointer;
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;
}

/* Tooltip arrow */
.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

`
