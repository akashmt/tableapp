import React from 'react'
import styled from 'styled-components'
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa"
import { ModalSwitcher } from '../components'

export class CaptionSelectedOption extends React.Component {

	render() {
		const option = this.props.selectedState.selectedOption
		const sortOrder = this.props.selectedState.direction
		const selectedColumn = this.props.selectedState.selectedcolumn

		return (
			<StyledCaption>
				<div><ModalSwitcher {...this.props}/></div>
				<h3>{this.props.children}</h3>
        {(selectedColumn) ? <p>Selected <strong>{selectedColumn}</strong></p> : ''}
        {
          option ===  "search_filter" ? 
            <input type="search" onChange={this.props.handleSearch}/> :
          option === "sort_filter"  ?
            <span onClick={this.props.handleSort}> {sortOrder === 'asc' ? <FaSortUp /> : sortOrder === 'desc' ? <FaSortDown /> : <FaSort/>} </span> :
          option === "show_numbers" ?
          <span onClick={this.props.handleNumber}>Only show number below 1500 (data in column)</span>:
          ""
        }
			</StyledCaption>
		)
	}
}

const StyledCaption = styled.caption`
	margin: 0rem;
	padding: 1.5rem;
	text-align: left;
	background: #232323;
	div {
		text-align: right;
		button {
			padding: 0rem 1rem;
			height: 3.8rem;
			font-size: 1.6rem;
			letter-spacing: .1rem;
			line-height: 3.8rem;
			background-color: #002040;
			border: 0rem solid #9b4dca;
			svg {
				
			}
		}
	}
	h3 {
		margin: 0rem;
		font-size: 1.8rem; 
		font-weight: bold;
	}
`