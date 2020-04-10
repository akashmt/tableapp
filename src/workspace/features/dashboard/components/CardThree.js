import React from 'react'
import styled from 'styled-components'
import { Card } from '../../../../appkit'

export function CardThree() {
	return (
		<Card className="Dashboard-cardthree">
			<h2>Other Information</h2>
			<StyledList>
        <li><strong>Sales Stuff</strong><span>$1,403.12</span></li>
        <li><strong>Refunds</strong><span>$59.19</span></li>
        <li><strong>Chargebacks</strong><span>$30.00</span></li>
        <li><strong>Net Income</strong><span>$1,102.12</span></li>
      </StyledList>
		</Card>
	)
}

const StyledList = styled.ul`
  list-style: none;
  li {
    display: flex;
    justify-content: space-between;
  }
`