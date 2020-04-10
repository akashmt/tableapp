import React from 'react'
import styled from 'styled-components'
import { Fieldset, FormGroup, Label } from '../../../../../components/modalswitcher/elements'

export const ModalForm = (props) => {

	return (
		<StyledForm onSubmit={props.handleResetColumn}>
      <label>Filter by</label>
      <FormGroup>
        <input 
          type="radio"
          name={props.column}
          value="search" 
          onChange={props.handleColumn}
          checked={props.stateValue.columnFilter[props.column] === 'search'}  
        /><label>Search</label><br/>
        <input 
          type="radio"
          name={props.column}
          value="sort" 
          onChange={props.handleColumn}
          checked={props.stateValue.columnFilter[props.column] === 'sort'} 
        /><label>Sort</label>
      </FormGroup>
      <FormGroup layout="savecontext">
        <button name={props.column} onClick={props.handleResetColumn}>Reset</button>
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
