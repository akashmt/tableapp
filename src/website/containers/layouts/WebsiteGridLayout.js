import React from 'react'
import styled, { css } from 'styled-components'
import { Header, MainNav, Main, FooterNav, Footer } from '../../containers'

export const WebsiteGridLayout = ({ children }) => {
	return (
		<section className="App-website">
			<Header/>
			<MainNav/>
			<Main>
				{children}
			</Main>
			<FooterNav/>
			<Footer/>
		</section>
	)
}

const StyledSection = styled.section``
