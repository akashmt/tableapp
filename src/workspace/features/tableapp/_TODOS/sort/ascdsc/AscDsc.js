import React from 'react'
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class AscDsc extends React.Component {
	state = {
    beatles: [...beatlesData],
    sort: {
      column: '',
      direction: ''
    }
  }

  handleSort = (key) => {
    const { direction } = this.state.sort
    const orderDirection = key ? (direction === 'asc' ? 'desc' : direction === 'desc' ? '' : 'asc' ) : 'asc'
    let arrayCopy = [...beatlesData]

    if(orderDirection) {
      arrayCopy.sort(function(a,b) {
        if(a[key] < b[key]) return -1
        else return 0
      })
      if(orderDirection === 'desc') {
        arrayCopy.reverse()
      }
    }
    this.setState({beatles: arrayCopy})
    this.setState({sort: {column: key, direction:orderDirection}})
  }

  handleDirection = (key) => { 
    const {column, direction} = this.state.sort
    return direction === 'asc' && column === key 
          ? <FaSortUp/>
          : direction === 'desc' && column === key 
          ? <FaSortDown/>
          : <FaSort/>
  }

	render() {
		const { beatles } = this.state
		const beatleslist = beatles.map((beatle, index) => {
			return ( 
				<TR key={index}>
					<TD>{beatle.firstname} {beatle.lastname}</TD>
          <TD>{beatle.age}</TD>
          <TD>{beatle.salary}</TD>
				</TR>
			)
		})
		return (
			<Table>
				<Caption>SortBy Column Demo</Caption>
				<THead>
					<TR>
						<TH><div onClick={()=>this.handleSort('firstname')}>Band Member <span>{this.handleDirection('firstname')}</span></div></TH>
            <TH><div onClick={()=>this.handleSort('age')}>Age <span>{this.handleDirection('age')}</span></div></TH>
            <TH><div onClick={()=>this.handleSort('salary')}>Salary <span>{this.handleDirection('salary')}</span></div></TH>
					</TR>
				</THead>
				<TBody>
					{beatleslist}
				</TBody>
        <TFoot>
					<TR>
						<TH colSpan="3">(c) footer</TH>
					</TR>
				</TFoot>
			</Table>
		)
	}
}