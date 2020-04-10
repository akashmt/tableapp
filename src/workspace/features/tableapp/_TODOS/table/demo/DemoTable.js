import React from 'react'
import styled from 'styled-components'
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'
import { Switch } from './components'

export class DemoTable extends React.Component {
	state = {
    beatles: beatlesData,
    columns: Object.keys(beatlesData[0]),
    header: false,
    fields: beatlesData.map((d, i) => { return {checked: false, data: d} } ),
    sort: {
      column: '',
      direction: ''
    },
    options: {
      isSearch: false,
      isSort: false,
      isFixed: false,
      isFooter: true,
      isCheckbox: false
    }
  }

  handleSwitch = (e) => {
    let optionsfilter = this.state.options
    if(e.target.name === "isSearch"){
      optionsfilter['isSort'] = false
      optionsfilter[e.target.name] = e.target.checked
    } if(e.target.name === "isSort"){
      optionsfilter['isSearch'] = false
      optionsfilter[e.target.name] = e.target.checked
    }
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

  compareBy = (key) => {
    return function(a,b) {
      if(a[key] < b[key]) return -1
      else return 0
    }
  }
  
  handleSort = (key) => {
    const { direction } = this.state.sort
    const orderDirection = key ? (direction === 'asc' ? 'desc' : 'asc') : 'asc'
    let arrayCopy = beatlesData
    arrayCopy.sort(this.compareBy(key))
    if(orderDirection === 'desc') {
      arrayCopy.reverse()
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
    const { beatles, columns, options, header, fields } = this.state
    
		return (
      <StyleTable className={options.isFixed ? "fixed-table" : "" }>
        <Table>
          <Caption>Table Demo
            <div>
              <label> Search: </label> <Switch handleValue={options.isSearch} handleSwitch={(e)=>this.handleSwitch(e)} name="isSearch" />
              <label> Sort: </label> <Switch handleValue={options.isSort} handleSwitch={(e)=>this.handleSwitch(e)} name="isSort" />
              <label> Fixed Header: </label> <Switch handleValue={options.isFixed} handleSwitch={(e)=>this.handleSwitch(e)} name="isFixed" />
              <label> Checkbox: </label> <Switch handleValue={options.isCheckbox} handleSwitch={(e)=>this.handleSwitch(e)} name="isCheckbox" />
              <label> Footer: </label> <Switch handleValue={options.isFooter} handleSwitch={(e)=>this.handleSwitch(e)} name="isFooter" />
            </div>
          </Caption>

          <THead>

            <TR>
              {options.isCheckbox 
              ?
                <TH><input type="checkbox" name="name1" onChange={this.handleChangeAllCheckBox} checked={header} /></TH>
              : null
              }
              {columns.map((col, index) => (
                options.isSort 
                ? <TH key={index}><div onClick={()=>this.handleSort(col)}> {col} <span>{this.handleDirection(col)}</span></div></TH>
                : <TH key={index}>{col}</TH>
              ))}
            </TR>

            {options.isSearch 
            ? <TR>
                {options.isCheckbox 
                ? <TH></TH>
                : null}
                {columns.map((col, index) => (
                  <TH key={index}><input type="search" name={col} onChange={(e) => this.handleSearch(e, col)} /></TH>
                ))}
              </TR>
            : null
            }
           
          </THead>
          <TBody>
            {beatles.map((beatle, index) => (
                <TR key={index}>
                  {options.isCheckbox 
                  ? <TD><input type="checkbox" name="name1" onChange={() => this.handleChangeCheckBoxFields(beatle, index)} checked={fields[index].checked} /></TD>
                  : null}
                  {columns.map((col, index) => (
                    <TD key={index}>{beatle[col]}</TD>
                  ))}
                </TR>
            ))}
          </TBody>

          {options.isFooter 
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
