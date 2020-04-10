import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData1 } from '../../../data/json/beatles'

export class CollapseColumn extends React.Component {
  state = {
    beatles: beatlesData1,
    columns: Object.keys(beatlesData1[0]),
    expandedColumns: [] 
    
  }

  renderColumnItem = (colId) => {
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
			<Table>
				<Caption>Collapse Column Demo</Caption>
				<THead>
          <TR>
            <TH>Band Member</TH>
            <TH>Status</TH>
            <TH colSpan={this.state.expandedColumns.includes('telephone') ? 2 : ''}><span onClick={()=>this.renderColumnItem('telephone')}>Telephone {this.state.expandedColumns.includes('telephone') ? <FaMinus/> : <FaPlus/>}</span></TH>
            <TH>Age</TH>
          </TR>
				</THead>
				<TBody>
					{beatles.map((beatle, index) => {
            return ( 
              <TR key={index}>
                <TD>{beatle.firstname} {beatle.lastname}</TD>
                <TD>{beatle.status}</TD>
                <TD>{beatle.telephone[0]}</TD>
                {this.state.expandedColumns.includes('telephone') ?
                  <TD>{beatle.telephone[1]}</TD>
                :
                null
                }
                <TD>{beatle.age} </TD>
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
		)
	}
}