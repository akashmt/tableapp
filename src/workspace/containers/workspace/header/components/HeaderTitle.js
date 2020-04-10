import React from 'react'
import styled from 'styled-components'
import { HoverInfoPanel }  from '../components'

export function HeaderTitle() {
	return (
		<StyledDiv>
      <div>
        <h1>EDS Workspace</h1>
        <p>Lorem ipsum dolor sit amet consectetur  elit tempore.</p>
      </div>
      <HoverInfoPanel />
		</StyledDiv>
	)
}

const WHITE = 'white'

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
	h1, h2, h3, p {
		margin: 0rem;
		color: ${WHITE};
	}
	h1 { font-size: 2.6rem; }
	h2 { font-size: 2.0rem }
	h3 { }
	p  { }
`