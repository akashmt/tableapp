import React from 'react'
import styled from 'styled-components'

export const Main = ({ children }) => {
	return (
		<main className="Workspace-main">
			{children}
		</main>
	)
}

const StyledMain = styled.main``