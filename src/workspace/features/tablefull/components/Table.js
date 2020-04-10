import React from 'react'
import styled from 'styled-components'

export const Table = (props) => {
	return (
		<StyledTable {...props}>
			{props.children}
		</StyledTable>
	)
}

const StyledTable = styled.table``