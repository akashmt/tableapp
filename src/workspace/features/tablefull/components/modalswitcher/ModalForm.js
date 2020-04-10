import React from 'react'
import styled from 'styled-components'
import { Fieldset, FormGroup, Label } from './elements'

export const ModalForm = (props) => {

	return (
		<StyledForm onSubmit={props.handleFormSubmit}>
      <FormGroup>
        <select value={props.selectedState.selectedColumn} onChange={props.handleColumnChange}>
          <option value="">Choose Column</option>
          <option value="name">Band Member</option>
          <option value="salary">Salary</option>
        </select>
			</FormGroup>
			<FormGroup>
        <input 
          id="search_filter"
          type="radio"
          value="search_filter" 
          onChange={props.handleOptionChange}
          checked={props.selectedState.selectedOption === "search_filter"}
        />
        <label htmlFor="search_filter">Search Filter</label>
			</FormGroup>
			<FormGroup>
        <input 
          id="sort_filter"
          type="radio"
          value="sort_filter" 
          onChange={props.handleOptionChange}
          checked={props.selectedState.selectedOption === "sort_filter"}
        />
        <label htmlFor="sort_filter">Sort Filter</label>
			</FormGroup>
     
      <FormGroup>
        <input 
          id="show_numbers"
          type="radio"
          value="show_numbers" 
          onChange={props.handleOptionChange}
          checked={props.selectedState.selectedOption === "show_numbers"}
        />
        <label htmlFor="show_numbers">Only show Numbers below 1500</label>
      </FormGroup>
      
			<FormGroup layout="savecontext">
				<button>Save</button>
			</FormGroup>
		</StyledForm>
	)
}

const StyledForm = styled.form`
	margin-bottom: 3.0rem;
	background: white;
	border-radius: 1.0rem;
	div {
		label { }
		input[type="radio"] { 
			margin-right: 1rem; 
			margin-bottom: .6rem;
			
			background-color: #002040;
			border: .0625em solid rgba(255,255,255,.5);
			border-radius: 50%;
			box-shadow: inset 0 0 0 0 white;
			cursor: pointer;
			font: inherit;
			width: 1.6em;
			height: 1.6em;
			outline: none;
			-moz-appearance: none;
			-webkit-appearance: none;
			&:checked {
				background-color: RED;
				box-shadow: inset 0 0 0 .1875em #47d1da;
				-webkit-transition: background .15s, box-shadow .1s; 
				transition: background .15s, box-shadow .1s; 
			}
		}
		button { margin-bottom: 0rem; }
	}
`
