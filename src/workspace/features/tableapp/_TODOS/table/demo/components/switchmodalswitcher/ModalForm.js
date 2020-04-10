import React from 'react'
import styled from 'styled-components'
import { Fieldset, FormGroup, Label } from '../../../../../components/modalswitcher/elements'
import { Switch } from '../'

export const ModalForm = (props) => {

	return (
		<StyledForm>
      
      <FormGroup>
        <label>Fixed Header</label>
        <Switch handleSwitch={(e)=>props.handleChange(e)} name="fixedHeader" />
      </FormGroup>
      <FormGroup>
        <label>Show Footer</label>
        <Switch handleSwitch={(e)=>props.handleChange(e)} name="showFooter" />
      </FormGroup>
      <FormGroup>
        <label>Select Rows</label>
        <Switch handleSwitch={(e)=>props.handleChange(e)} name="selectRow" />
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
