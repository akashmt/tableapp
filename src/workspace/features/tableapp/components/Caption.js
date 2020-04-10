import React from 'react'
import styled from 'styled-components'

export const Caption = ({ children }) => {
	return (
		<StyledCaption>
			{children}
		</StyledCaption>
	)
}

const StyledCaption = styled.caption``