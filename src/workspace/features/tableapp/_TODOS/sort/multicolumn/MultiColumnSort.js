import React from 'react'
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { ModalSwitcher } from './components/sortmodalswitcher'
import { multisortData } from '../../../data/json/beatles'

export class MultiColumnSort extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      beatles: [...multisortData],
      columns: Object.keys(multisortData[0]),
      sortBy: {
        column: '',
        direction: ''
      },
      thenBy: {
        column: '',
        direction: ''
      },
      thenBy2: {
        column: '',
        direction: ''
      }
    }
  }

  handleChange = (e) => {
    if(e.target.name === "sortbycolumn") {
      this.setState({sortBy: {...this.state.sortBy, column: e.target.value}})
    }
    if(e.target.name === "sortby") {
      this.setState({sortBy: {...this.state.sortBy, direction: e.target.value}})
    }
    if(e.target.name === "thenbycolumn") {
      this.setState({thenBy: {...this.state.thenBy, column: e.target.value}})
    }
    if(e.target.name === "thenby") {
      this.setState({thenBy: {...this.state.thenBy, direction: e.target.value}})
    }
    if(e.target.name === "thenbycolumn2") {
      this.setState({thenBy2: {...this.state.thenBy2, column: e.target.value}})
    }
    if(e.target.name === "thenby2") {
      this.setState({thenBy2: {...this.state.thenBy2, direction: e.target.value}})
    }
  }

  handleReset = () => {
    this.setState({sortBy: {column: '', direction: ''}})
    this.setState({thenBy: {column: '', direction: ''}})
    this.setState({thenBy2: {column: '', direction: ''}})
  }

 
  
  handleSort = (e) => {
    e.preventDefault()
    const { sortBy, thenBy, thenBy2 } = this.state
    let arrayCopy = [...multisortData]
   
    arrayCopy.sort(function(a, b) {
    
      if(sortBy.direction === 'asc') {
        if (a[sortBy.column] > b[sortBy.column]) {
          return 1;
        } else if (a[sortBy.column] < b[sortBy.column]) { 
            return -1;
        }
      } else {
        if (a[sortBy.column] < b[sortBy.column]) {
          return 1;
        } else if (a[sortBy.column] > b[sortBy.column]) { 
            return -1;
        }
      }

      // Else go to the 2nd item
      if(thenBy.direction === 'asc') {
        if (a[thenBy.column] > b[thenBy.column]) { 
            return 1;
        } else if (a[thenBy.column] < b[thenBy.column]) {
            return -1
        } 
      } else {
        if (a[thenBy.column] < b[thenBy.column]) { 
          return 1;
        } else if (a[thenBy.column] > b[thenBy.column]) {
            return -1
        }
      }

      // Else go to the 3rd item
      if(thenBy2.direction === 'asc') {
        if (a[thenBy2.column] > b[thenBy2.column]) { 
            return 1;
        } else if (a[thenBy2.column] < b[thenBy2.column]) {
            return -1
        } else { 
            return 0;
        }
      } else {
        if (a[thenBy2.column] < b[thenBy2.column]) { 
          return 1;
        } else if (a[thenBy2.column] > b[thenBy2.column]) {
            return -1
        } else { 
            return 0;
        }
      }
      
    });
    
    this.setState({beatles: arrayCopy})

  }

  // handleDirection = (key) => { 
  //   const { sortBy, thenBy } = this.state
  //   return (sortBy.column === key || thenBy.column === key)
  //         ? sortBy.direction === 'asc' ? <FaSortUp/> : sortBy.direction === 'desc' ? <FaSortDown/> : ''
  //         : thenBy.direction === 'desc' ? <FaSortUp/> : thenBy.direction === 'desc' ? <FaSortDown/> : ''
  // }

	render() {
		const { beatles, columns } = this.state
    console.log(this.state)
		return (
			<Table>
				<Caption>
          SortBy Multi Column Demo
          <ModalSwitcher stateValue={this.state} handleChange={this.handleChange} handleSort={this.handleSort} handleReset={this.handleReset}  />
        </Caption>
        
				<THead>
					<TR>
              {columns.map((col, index) => (
                <TH key={index}>{col}</TH>
              ))}
					</TR>
				</THead>
				<TBody>
        {beatles.map((beatle, index) => {
          return ( 
            <TR key={index}>
              {columns.map((col, index) => {
                return(
                  <TD key="index">{beatle[col]}</TD>
                )
              })}
            </TR>
          )
        })}
				</TBody>
        <TFoot>
					<TR>
						<TH colSpan={columns.length}>(c) footer</TH>
					</TR>
				</TFoot>
			</Table>
		)
	}
}