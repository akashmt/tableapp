import React from 'react'
import styled from 'styled-components'
import { FaSort, FaSortUp, FaSortDown, FaCog } from "react-icons/fa";
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'
import { ModalSwitcher } from './components/switchmodalswitcher'
import { ColumnModalSwitcher } from './components/columnmodalswitcher'


export class OptionsTable extends React.Component {
	state = {
    beatles: beatlesData,
    columns: Object.keys(beatlesData[0]),
    header: false,
    fields: beatlesData.map((d, i) => { return {checked: false, data: d} } ),
    sort: {
      column: '',
      direction: ''
    },
    options: {},
    columnFilter: {}
  }

  handleColumn = (e) => {
    let columnFilter = this.state.columnFilter
    columnFilter[e.target.name] = e.target.value;
    this.setState({ columnFilter });
  }

  handleResetColumn = (e) => {
    e.preventDefault()
    let columnFilter = this.state.columnFilter
    columnFilter[e.target.name] = e.target.value;
    this.setState({ columnFilter });
  }

  handleChange = (e) => {
    let optionsfilter = this.state.options
    optionsfilter[e.target.name] = e.target.checked
    this.setState({ options: optionsfilter });
  }

  handleSearch = (e, key) => {
    let beatlesCopy = beatlesData
    let searchString = (e.target.value).trim().toLowerCase()
    let searchRecords = beatlesCopy.filter((beatle) => {
      return (
        beatle[key].toString().toLowerCase().match(searchString) 
      )
    })
      this.setState({beatles: searchRecords})
  }

  handleSort = (key) => {
    const { direction } = this.state.sort
    const orderDirection = key ? (direction === 'asc' ? 'desc' : direction === 'desc' ? '' : 'asc' ) : 'asc'
    let arrayCopy = [...beatlesData]

    if(orderDirection) {
      arrayCopy.sort(function(a, b) {
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
  
	render() {
    const { beatles, columns, options, header, fields, columnFilter } = this.state
    console.log(columnFilter)
		return (
      <StyleTable className={options.fixedHeader ? "fixed-table" : "" }>
        <Table>
          <Caption>
            Switch Options Table
            <ModalSwitcher stateValue={this.state} handleChange={this.handleChange} />
          </Caption>

          <THead>

            <TR>
              {options.selectRow 
              ?
                <TH><input type="checkbox" name="name1" onChange={this.handleChangeAllCheckBox} checked={header} /></TH>
              : null
              }
              {columns.map((col, index) => (
                <TH key={index}>{col} 
                  <ColumnModalSwitcher 
                    stateValue={this.state} 
                    handleColumn={this.handleColumn} 
                    handleResetColumn={this.handleResetColumn} 
                    column={col} />
                </TH>
              ))}
            </TR>
            {(Object.keys(columnFilter).length > 0)  ?
              <TR>
                {options.selectRow 
                ? <TH></TH>
                : null}
                {columns.map((col, index) => (
                  columnFilter[col] === 'search' ?
                    <TH key={index}><input type="search" name={col} onChange={(e) => this.handleSearch(e, col)} /></TH>
                  : columnFilter[col] === 'sort' ?
                    <TH key={index}><div onClick={()=>this.handleSort(col)}><span>{this.handleDirection(col)}</span></div></TH>
                  : <TH></TH>
                ))}
              </TR>
            : null
            }
            
           
          </THead>
          <TBody>
            {beatles.map((beatle, index) => (
                <TR key={index}>
                  {options.selectRow 
                  ? <TD><input type="checkbox" name="name1" onChange={() => this.handleChangeCheckBoxFields(beatle, index)} checked={fields[index].checked} /></TD>
                  : null}
                  {columns.map((col, index) => (
                    <TD key={index}>{beatle[col]}</TD>
                  ))}
                </TR>
            ))}
          </TBody>

          {options.showFooter 
          ? <TFoot>
              <TR>
                <TH colSpan={columns.length}>(c) footer</TH>
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
 
  .columnsettings {
    float: right;
    position: relative;
    .column-dropdown {
      position: absolute;
      top: 40px;
      right: 0px;
      background-color: WHITE;
      ul {
        list-style: none;
        backgroun-color: white;
        padding: 20px;
        margin: 0px;
        li {
          color: BLACK;
          
        }
      }
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
