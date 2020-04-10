import React from 'react'
import styled from 'styled-components'
import { Fieldset, FormGroup, Label } from '../../../../../components/modalswitcher/elements'

export const ModalForm = (props) => {

	return (
		<StyledForm onSubmit={props.handleSort}>
      <label>Sort by</label>
      <FormGroup>
        <select name="sortbycolumn" value={props.stateValue.sortBy.column} onChange={props.handleChange}>
          <option value="">Choose Column</option>
          {props.stateValue.columns.map((col, index) => (
            <option key={index} value={col}>{col}</option>
          ))}
        </select>
      </FormGroup>
      <FormGroup>
        <input 
          type="radio"
          name="sortby"
          value="asc" 
          onChange={props.handleChange}
          checked={props.stateValue.sortBy.direction === 'asc'}
        /><label>Asc</label><br/>
        <input 
          type="radio"
          name="sortby"
          value="desc" 
          onChange={props.handleChange}
          checked={props.stateValue.sortBy.direction === 'desc'}
        /><label>Desc</label>
			</FormGroup>
      <label>Then by</label>
			<FormGroup>
        <select name="thenbycolumn" value={props.stateValue.thenBy.column} onChange={props.handleChange}>
          <option value="">Choose Column</option>
          {props.stateValue.columns.map((col, index) => (
            <option value={col}>{col}</option>
          ))}
        </select>
      </FormGroup>
      <FormGroup>
        <input 
          type="radio"
          name="thenby"
          value="asc" 
          onChange={props.handleChange}
          checked={props.stateValue.thenBy.direction === 'asc'}
        /> <label> Asc</label>
        <input 
          type="radio"
          name="thenby"
          value="desc" 
          onChange={props.handleChange}
          checked={props.stateValue.thenBy.direction === 'desc'}
        /> <label> Desc</label>
			</FormGroup>
      <label>Then by</label>
			<FormGroup>
        <select name="thenbycolumn2" value={props.stateValue.thenBy2.column} onChange={props.handleChange}>
          <option value="">Choose Column</option>
          {props.stateValue.columns.map((col, index) => (
            <option value={col}>{col}</option>
          ))}
        </select>
      </FormGroup>
      <FormGroup>
        <input 
          type="radio"
          name="thenby2"
          value="asc" 
          onChange={props.handleChange}
          checked={props.stateValue.thenBy2.direction === 'asc'}
        /> <label> Asc</label>
        <input 
          type="radio"
          name="thenby2"
          value="desc" 
          onChange={props.handleChange}
          checked={props.stateValue.thenBy2.direction === 'desc'}
        /> <label> Desc</label>
			</FormGroup>
      
			<FormGroup layout="savecontext">
				<button>Save</button>
        <button onClick={props.handleReset}>Reset</button>
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
