import React from 'react'
import styled from 'styled-components'
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../components'
import { TableData } from '../data/json/TableData'


export class SimpleTable extends React.Component {
  state = {
    tableData: TableData,
    header: false,
    fields: TableData.table.rows.map((d, i) => { return {checked: false, data: d} } ),
    sort: {
      column: '',
      direction: ''
    }
  }
  
  formatStringData = (type, format, presicion, cell) => {
   
    if(type === "currency") {
      switch(format) {
        case 'decimal':
          return '$' + cell.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        case 'simple':
            return '$' + cell.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        default:
          return '$' + cell;
      }
    }
    if(type === "number") {
      let rescell = []
      let formatcell = cell.toFixed(presicion)
      rescell = formatcell.split('.');
      switch(format) {
        case 'decimal':
          return rescell[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') +'.'+ rescell[1]
        case 'simple':
            return cell.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        default:
          return cell;
      }
    }
    if(type === "percent") {
      let rescell = []
      let formatcell = cell.toFixed(presicion)
      rescell = formatcell.split('.');
      switch(format) {
        case 'decimal':
          return rescell[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') +'.'+ rescell[1] + '%'
        case 'simple':
            return cell.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + '%'
        default:
          return cell + '%';
      }
    }
    if(type === "date") {
      let d = new Date(cell);
      let year = ('' + d.getFullYear())
      let month = (1 + d.getMonth())
      let day = d.getDate()
      let hours = d.getHours()
      let minutes = d.getMinutes()
      let seconds = d.getSeconds()
      
      let ampm = hours >= 12 ? 'pm' : 'am'
      let hourFormatted = hours % 12 || 12 // hour returned in 12 hour format
      

      var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];

      switch(format) {
        case 'M/D/YY':
          return month + '/' + day + '/' + year.substr(2)
        case 'MM/DD/YY': 
          return month.toString().padStart(2, '0') + '/' + day.toString().padStart(2, '0') + '/' + year.substr(2)
        case 'MM/DD/YYYY':
          return month.toString().padStart(2, '0') + '/' + day.toString().padStart(2, '0') + '/' + year
        case 'MMM D, YY':
          return monthShortNames[month-1] + ' ' + day+ ',' +  year.substr(2)
        case 'MMMM D, YYYY':
          return monthNames[month-1] + ' ' + day+ ',' +  year
        case 'MM-DD':
          return month.toString().padStart(2, '0') + '-' + day.toString().padStart(2, '0')
        case 'YY-MM-DD':
          return year.substr(2) + '-' + month.toString().padStart(2, '0') + '-' + day.toString().padStart(2, '0')
        case 'D-MMM-YY':
          return day.toString().padStart(2, '0') + '-' + monthShortNames[month-1] + '-' + year.substr(2)
        case 'MMM-YY':
          return monthShortNames[month-1] + '-' + year.substr(2)
        case 'D-MMM':
          return day + '-' + monthShortNames[month-1]
        case 'MM/DD/YY HH:MM AM/PM':
          return month.toString().padStart(2, '0') + '/' + day.toString().padStart(2, '0') + '/' + year.substr(2) + ' ' + hourFormatted.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ' ' + ampm
        case 'MM/DD/YYYY HH:MM:SS':
          return month.toString().padStart(2, '0') + '/' + day.toString().padStart(2, '0') + '/' + year + ' ' + hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
        case 'M/D/YYYY H:MM':
          return month + '/' + day + '/' + year + ' ' + hours + ':' + minutes.toString().padStart(2, '0')
        default:
          return cell;
      }
    }
    if(type === "time") {
      let d = new Date(cell * 1000);
      let hours = d.getHours()
      let minutes = d.getMinutes()
      let seconds = d.getSeconds()
      let ampm = hours >= 12 ? 'pm' : 'am'
      let hourFormatted = hours % 12 || 12 // hour returned in 12 hour format
      switch(format) {
        case 'HH:MM':
          return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0')
        case 'HH:MM:SS':
          return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
        case 'HH:MM AM/PM':
          return hourFormatted.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ' ' + ampm
        case 'HH:MM:SS AM/PM':
          return hourFormatted.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0') + ' ' + ampm
        case 'H:MM AM/PM':
          return hours + ':' + minutes.toString().padStart(2, '0') + ' ' + ampm
        case 'H:MM':
          return hours + ':' + minutes.toString().padStart(2, '0')
        case 'H:MM:SS':
          return hours + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
        default:
          return cell;
      }
    }
    if(type === "boolean") {
      switch(format) {
        case '1':
          return cell === true || cell === 1 ? 1 : 0
        case 'true':
          return cell === true || cell === 1 ? 'TRUE' : 'FALSE'
        default:
          return cell;
      }
    }
    if(type === "text") {
      return cell;
    }
  }

  handleChangeAllCheckBox = () => {
    let { header,fields} = this.state
    let newHeader = !header
    let newFields = fields.map((f) => {
      return {
        checked: newHeader,
        data: f.data
      }   
    })
    this.setState({
      fields: newFields,
      header: newHeader
    })
  }

  handleChangeCheckBoxFields = (beatle, index) => {
    let newState = this.state.fields
    newState[index] = {
        checked: !newState[index].checked,
        data: beatle
    }
    this.setState({fields: newState})
  }

  handleSearch = (e, key) => {
    let tableDataCopy = TableData
    let searchString = (e.target.value).trim().toLowerCase()
    let searchRecords = tableDataCopy.table.rows.filter((row) => {
     
      return (
        row[key].toString().toLowerCase().match(searchString) 
      )
    })
      
      this.setState(prevState => ({
        tableData: {
          ...prevState.tableData,
          table: {
            ...prevState.tableData.table,
            rows: searchRecords
          }
        }
      }))
  }

  handleSelectOption = (optionEvent, column) => {
    let tableDataCopy = TableData
    let searchString = optionEvent.target.value
    let searchRecords = tableDataCopy.table.rows.filter((row) => {
      return (
        searchString ?
          row[column].toString() === searchString
        :
          row
      )
    })
    this.setState(prevState => ({
      tableData: {
        ...prevState.tableData,
        table: {
          ...prevState.tableData.table,
          rows: searchRecords
        }
      }
    }))
  }

  optionList = (column) => {
    const uniqueOptions = [];
    TableData.table.rows.map(row => {
        if (uniqueOptions.indexOf(row[column]) === -1) {
          uniqueOptions.push(row[column])
        }
    });

    return uniqueOptions.map((option, index) => {
      return(
        <option key={index} value={option}>{option}</option>
      )
    })
  }

  compareBy = (key) => {
    return function(a,b) {
      if(a[key] < b[key]) return -1
      else return 0
    }
  }
  
  handleSort = (key) => {
    const { direction } = this.state.sort
    const orderDirection = key ? (direction === 'asc' ? 'desc' : 'asc') : 'asc'
    let arrayCopy = TableData.table.rows
    arrayCopy.sort(this.compareBy(key))
    if(orderDirection === 'desc') {
      arrayCopy.reverse()
    }
    this.setState(prevState => ({
      tableData: {
        ...prevState.tableData,
        table: {
          ...prevState.tableData.table,
          rows: arrayCopy
        }
      }
    }))
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
    const { tableData, header, fields } = this.state

    const numericSet = ["number", "currency", "percent"]

  
		return (
      <StyleTable className={tableData.table.fixedHeader ? "fixed-table" : "" }>
        <Table>
          <Caption>Full Table</Caption>
          <THead>
            <TR>
              {tableData.table.selectRow 
              ?
                <TH><input type="checkbox" name="name1" onChange={this.handleChangeAllCheckBox} checked={header} /></TH>
              : null
              }
              {tableData.table.columns.map((column, index) => {
                return ( 
                <TH>{column.headerText} {column.isSortable && <span onClick={()=>this.handleSort(column.name)}>{this.handleDirection(column.name)}</span>}</TH>
                )
              })}
            </TR>
           <TR>
              {tableData.table.columns.map((column, index) => {
                return(
                  column.isSearchable ?
                    ( <TH key={index}><input type="search" name={column.name} onChange={(e) => this.handleSearch(e, column.name)} /></TH> )
                  : column.isSelectDropDown ?
                    (<TH>
                      <select onChange={(e) => this.handleSelectOption(e, column.name)}>
                        <option value="">Choose Option</option>
                        {this.optionList(column.name)}
                      </select>
                    </TH>)
                  : ( <TH></TH> )
                )
              })}
            </TR>
           
          </THead>
          <TBody>
            {tableData.table.rows.map((row, index) => {
              return ( 
                <TR key={row.key}>
                  {tableData.table.selectRow 
                  ? <TD><input type="checkbox" name="name1" onChange={() => this.handleChangeCheckBoxFields(row, index)} checked={fields[index].checked} /></TD>
                  : null}
                  {tableData.table.columns.map((column, index) => {
                    return (
                      <TD className={numericSet.indexOf(column.dataType) > -1 ? 'rightalign' : ''}>{this.formatStringData(column.dataType, column.formatString, column.presicion, row[column.name])}</TD>
                    )
                  })}
                </TR>
              )
            })}
          </TBody>
          {tableData.table.showFooter 
          ?
          <TFoot>
            <TR>
              <TH colSpan={tableData.table.columns.length}>(c) footer</TH>
            </TR>
          </TFoot>
          : null
          }
        </Table>
      </StyleTable>
    )
	}
}

const StyleTable = styled.div`
  label {
    display: inline-block;
  }
  input {
    color: white;
  }
  td {
    border: 0.1rem solid #e1e1e1;
    text-align: left;
    &.rightalign {
      text-align: right;
    }
  }
  &.fixed-table {
    table-layout:fixed;
    
    tr {
      display:table;
      width:100%;
      table-layout:fixed;
    }
    thead, tfoot {
      display:table;
      width:100%;
      width:calc(100% - 18px);
    }
    tbody {
      height:300px;
      overflow:auto;
      overflow-x:hidden;
      display:block;
      width:100%;
    }
  }
` 
