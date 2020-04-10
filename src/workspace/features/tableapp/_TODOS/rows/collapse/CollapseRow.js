import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class CollapseRow extends React.Component {
  state = {
    beatles: beatlesData,
    expandedRows: [] 
    
  }

  renderRowItem = (rowId) => {
    const currentExpandedRows = this.state.expandedRows;
    const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);
    
    const newExpandedRows = isRowCurrentlyExpanded ? 
      currentExpandedRows.filter(id => id !== rowId) : 
      currentExpandedRows.concat(rowId);
    
    this.setState({expandedRows : newExpandedRows});
  }
  
  renderItem = (item) => {
    const clickCallback = () => this.renderRowItem(item.id)
    const itemRows = [
      <TR>
        <TD><div onClick={clickCallback}>{this.state.expandedRows.includes(item.id) ? <FaMinus/> : <FaPlus/>}</div></TD>
        <TD>{item.firstname}</TD>
        <TD>{item.lastname}</TD>
        <TD>{item.status}</TD>
      </TR>
    ]

    if(this.state.expandedRows.includes(item.id)) {
      itemRows.push(
        <TR>
          <TD colSpan="4">
            <div><strong>Active: </strong> {item.active}</div>
            <div><strong>Age: </strong> {item.age}</div>
            <div><strong>Salary: </strong>{item.salary}</div>
          </TD>
        </TR>
      )
    }

    return itemRows
  }

	render() {
    let allItemRows = []
		const { beatles } = this.state
	  beatles.map(item => {
      const perItemRows = this.renderItem(item);
      allItemRows = allItemRows.concat(perItemRows);
		})
		return (
			<Table>
				<Caption>Collapse Row Demo</Caption>
				<THead>
					<TR>
						<TH>###</TH>
            <TH>Firstname</TH>
            <TH>Lastname</TH>
            <TH>Status</TH>
					</TR>
				</THead>
				<TBody>
					{allItemRows}
				</TBody>
        <TFoot>
					<TR>
						<TH colSpan="4">(c) footer</TH>
					</TR>
				</TFoot>
			</Table>
		)
	}
}