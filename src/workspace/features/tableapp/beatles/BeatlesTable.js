import React from 'react'
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { Table, Caption, CaptionSelectedOption, THead, TFoot, TBody, TR, TH, TD } from '../components'

const beatlesData = [
	{ id: 1, firstname: "John", lastname: "Lennon", salary: "1000" },
	{ id: 2, firstname: "Paul", lastname: "McCarthy", salary: "1200" },
	{ id: 3, firstname: "George", lastname: "Harrison", salary: "2000" },
	{ id: 4, firstname: "Ringo", lastname: "Star", salary: "1300" }
]

export class BeatlesTable extends React.Component {
	state = {
		beatles: beatlesData,
		selectedOption: '',
    direction: '',
    currentPage: 1,
    recordPerPage: 2,
    selectedcolumn: ''
  }

  // popup form column change
  handleColumnChange = (changeEvent) => {
		this.setState({
			selectedcolumn: changeEvent.target.value
		})
	}

  // popup form option change
	handleOptionChange = (changeEvent) => {
		this.setState({
			selectedOption: changeEvent.target.value
		})
	}

	handleFormSubmit = (formSubmitEvent) => {
		formSubmitEvent.preventDefault()
		console.log('You have selected option is:', this.state.selectedOption)
  }
  
  // Handle Number
  handleNumber = () => {
    let beatlesCopy = beatlesData
		let searchRecords = beatlesCopy.filter(
			(beatle) => {
        return ( 
          beatle.salary <= 1500
        )
			}
		)
		this.setState({beatles: searchRecords})
  }

  // Search
	handleSearch = (searchEvent) => {
		let beatlesCopy = beatlesData
		let searchString = (searchEvent.target.value).trim().toLowerCase();
		let searchRecords = beatlesCopy.filter(
			(beatle) => {
        if(this.state.selectedcolumn === 'name') {
          return ( 
            beatle.firstname.toLowerCase().match( searchString ) || 
            beatle.lastname.toLowerCase().match( searchString )
          )
        } else if(this.state.selectedcolumn === 'salary') {
          return ( 
            beatle.salary.includes(searchString)
          )
        } else {
          return ( 
            beatle
          )
        }
				
			}
		)
		this.setState({beatles: searchRecords})
	}

  // Sorting
	handleSort = (key) => {
		const direction_ = key ? (this.state.direction === 'asc' ? 'desc' : 'asc') : ''
		let beatlesCopy = beatlesData
		beatlesCopy.sort(this.compareBy(this.state.selectedcolumn))
		if (direction_ === 'desc') {
			beatlesCopy.reverse()
		}
		this.setState({ beatles: beatlesCopy })
		this.setState({ direction: direction_ })
  }

  compareBy = (key) => {
		return function (a, b) {
      if(key == '' || key === 'name') {
        key = 'firstname'
      }
			if (a[key] < b[key]) return -1
			if (a[key] < b[key]) return 1
			else return 0
		}
	}
  

  // Pagination click event
  handlePageClick = (event) => {
    this.setState({ currentPage: Number(event.target.id) })
  }
  
  // Diplay records per page change event 
  handleRecordPerPage = (event) => {
    this.setState({ currentPage: Number(1) })
    this.setState({ recordPerPage: Number(event.target.value) })
  }


	render() {
    
    // Logic for displaying per page records numbers
    const perpageRecords = [];
    for (let i = 1; i <= Math.ceil(this.state.beatles.length); i++) {
      if(i % 2 === 0) {
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
    for (let i = 1; i <= Math.ceil(this.state.beatles.length / this.state.recordPerPage); i++) {
      pageNumbers.push(i)
    }

    const renderPageNumbers = () => {
      return pageNumbers.map(number => {
        return (
          <li key={number} className={(number === this.state.currentPage) ? 'active' : ''} id={number} onClick={this.handlePageClick.bind(this)}>
            {number}
          </li>
        )
      })
    }

    // Logic for displaying table records 
    const indexOfLastRecord = this.state.currentPage * this.state.recordPerPage;
    const indexOfFirstRecord = indexOfLastRecord - this.state.recordPerPage;
    const currentBeatles = this.state.beatles.slice(indexOfFirstRecord, indexOfLastRecord);

		const beatleslist = currentBeatles.map((beatle, index) => {
			return ( <TR key={index}><TD>{beatle.firstname} {beatle.lastname}</TD><TD>{beatle.salary}</TD></TR> )
    })
    
		return (
			<Table>
        <CaptionSelectedOption selectedState={this.state}
                 handleFormSubmit={this.handleFormSubmit.bind(this)} 
                 handleColumnChange={this.handleColumnChange.bind(this)}
                 handleOptionChange={this.handleOptionChange.bind(this)}
                 handleSearch={this.handleSearch.bind(this)}
                 handleSort={this.handleSort.bind(this)}
                 handleNumber={this.handleNumber.bind(this)}>
          The Beatles
        </CaptionSelectedOption>
				<THead>
					<TR>
						<TH>Band Member</TH>
            <TH>Salary</TH>
					</TR>
				</THead>
				<TBody>
					{beatleslist}
				</TBody>
        <TFoot>
					<TR>
						<TH colSpan="2">(c) footer</TH>
					</TR>
          <TR>
						<TH>
              <select value={this.state.recordPerPage} onChange={this.handleRecordPerPage.bind(this)}>
                {renderPerPageRecords()}
              </select>
            </TH>
            <TH>
              <ul id="page-numbers">
                {renderPageNumbers()}
              </ul>
            </TH>
					</TR>
				</TFoot>
			</Table>
		)
	}
}