import React, { useState } from 'react'
import styled from 'styled-components'
import { Card } from '../../../appkit'
import { accountsData } from './data/dataConst'

export const Tabledemo = props => {
	const [accounts, setAccounts] = useState(accountsData)
	const [direction, setDirection] = useState()
	const [column, setColumn] = useState()
	const [currentPage, setCurrentPage] = useState(1)
	const [accountPerPage, setAccountPerPage] = useState(5)

	// Pagination click event
	const handleClick = (event) => {
		setCurrentPage(Number(event.target.id))
	}

	// Diplay records per page change event 
	const handleAccountPerPage = (event) => {
		setAccountPerPage(Number(event.target.value))
		setCurrentPage(Number(1))
	}

	// Logic for displaying records per page numbers
	const perpageRecords = []
	for (let i = 1; i <= Math.ceil(accounts.length); i++) {
		if(i % 5 === 0) {
			perpageRecords.push(i)
		}
	}
	const renderPerPageRecords = () => {
		return perpageRecords.map(number => {
			return (
				<option key={number} value={number}>{number}</option>
			)
		})
	}

	// Logic for displaying pagination page numbers
	const pageNumbers = []
	for (let i = 1; i <= Math.ceil(accounts.length / accountPerPage); i++) {
		pageNumbers.push(i)
	}
	const renderPageNumbers = () => {
		return pageNumbers.map(number => {
			return (
				<li key={number} 
						className={(number === currentPage) ? 'active' : ''} 
						id={number} 
						onClick={handleClick}
				>
					{number}
				</li>
			)
		})
	}

	// Logic for sorting records
	const compareBy = (key) => {
		return function (a, b) {
			if (a[key] < b[key]) return -1
			if (a[key] < b[key]) return 1
			else return 0
		}
	}
	
	const sortBy = (key) => {
		const direction_ = key ? (direction === 'asc' ? 'desc' : 'asc') : ''
		let arrayCopy = [...accounts]
		arrayCopy.sort(compareBy(key))
		if (direction_ === 'desc') {
			arrayCopy.reverse()
		}
		setAccounts(arrayCopy)
		setColumn(key)
		setDirection(direction_)
		setCurrentPage(Number(1))
	}

	/// Logic for return order direction for column
	const handleOrder = (key) => {
		return direction === 'asc' && 
			column===key 
				? '▲' 
				: direction === 'desc' && 
			column===key 
				? '▼' 
				: ''
	}

	/// Logic for search column data
	const handleSearch = (e, column) => {
		let arrayCopy = accountsData
		let searchString = (e.target.value).trim().toLowerCase();
		let searchRecords = arrayCopy.filter(
			(account) => {
				return account.name.toLowerCase().match( searchString )
			}
		)
		setAccounts(searchRecords)
		setCurrentPage(Number(1))
	}

	// Logic for displaying table records 
	const indexOfLastAccount = currentPage * accountPerPage;
	const indexOfFirstAccount = indexOfLastAccount - accountPerPage;
	const currentAccounts = accounts.slice(indexOfFirstAccount, indexOfLastAccount)

	const renderTableData = () => {
		return (
			currentAccounts.map((account, index) => {
				//destructuring
				const { id, name, type, accountingTime, moveTime, amount, securitizationOwner } = account 
				return (
					<tr key={id}>
						<td>{name}</td>
						<td>{type}</td>
						<td>{accountingTime}</td>
						<td>{moveTime}</td>
						<td>{amount}</td>
						<td>{securitizationOwner}</td>
					</tr>
				)
			})
		)
	}

	return (
		<Card>
		<StyledTabledemo  className="Tabledemo-container">
			<h2 id='title'>React Dynamic Table</h2>
			<table id='accountData'>
				<tbody>
					<tr>
						<th>
							<span onClick={() => sortBy('name')}>Name {handleOrder('name')}</span> <br/>
							<input type="text" onChange={(e) =>handleSearch(e,'name')} />
						</th>
						<th onClick={() => sortBy('type')}>Type {handleOrder('type')}</th>
						<th onClick={() => sortBy('accountingTime')}>AccountingTime {handleOrder('accountingTime')}</th>
						<th onClick={() => sortBy('moveTime')}>MoveTime {handleOrder('moveTime')}</th>
						<th onClick={() => sortBy('amount')}>Amount {handleOrder('amount')}</th>
						<th onClick={() => sortBy('securitizationOwner')}>SecuritizationOwner {handleOrder('securitizationOwner')}</th>
					</tr>
					{renderTableData()}
				</tbody>
			</table>

			<div className="pagination">
				<div className="recordsperpage">
					<select value={accountPerPage} onChange={handleAccountPerPage}>
						{renderPerPageRecords()}
					</select>
				</div>
				<ul id="page-numbers">
					{renderPageNumbers()}
				</ul>
			</div>
		</StyledTabledemo>
		</Card>
	)
}

const StyledTabledemo = styled.div`
	padding: 15px;
	#accountData {
		text-align: center;
		border-collapse: collapse;
		/* border: 3px solid #ddd; */
		width: 100%;
		margin-top: 30px;
		td, th {
			/* border: 1px solid #ddd; */
			padding: 8px;
		}
		th {
			padding-top: 12px;
			padding-bottom: 12px;
			text-align: center;
			/* background-color: #4CAF50; */
			/* color: white; */
		}
		tr {
			&:hover { /* background-color: #ddd; */ }
			&:nth-child(even){ /* background-color: #f2f2f2; */ }
		}
	}

	.pagination {
		display: flex;
		justify-content: space-between;
		margin: 15px;
		.recordsperpage { }
		ul {
			display: flex;
			justify-content: center;
			align-items: center;
			list-style: none;
			li {
				margin: 0px 10px;
				padding: 5px 10px;
				/* background: #a4a4a4; */
				background: WHITE;
				color: NAVY;
				cursor: pointer;
				&.active { /* background: green; */ }
			}
		}
	}
`
