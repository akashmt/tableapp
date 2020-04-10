import React from 'react'
import styled from 'styled-components'

export const TR = (props) => {
	return (
		<StyledTR {...props}>
			{props.children}
		</StyledTR>
	)
}

const StyledTR = styled.tr``