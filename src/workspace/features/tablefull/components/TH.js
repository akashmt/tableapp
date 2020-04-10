import React from 'react'
import styled from 'styled-components'

export const TH = (props) => {
	return (
		<StyledTH {...props}>
			{props.children}
		</StyledTH>
	)
}

const StyledTH = styled.th``