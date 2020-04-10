import React from 'react'
import styled from 'styled-components'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class ReorderColumns extends React.Component {
	state = {
    beatles: beatlesData,
    columns: Object.keys(beatlesData[0]),
    dragOver: ''
  }

  
  handleDragStart = e => {
    const { id } = e.target;
    const idx = this.state.columns.indexOf(id);
    e.dataTransfer.setData('colIdx', idx);
  }

  handleDragOver = e => e.preventDefault();

  handleDragEnter = e => {
    const { id } = e.target;
    this.setState({ dragOver: id });
  }

  handleOnDrop = e => {
    const { columns } = this.state
    const { id } = e.target;
    const droppedColIdx = columns.indexOf(id);
    const draggedColIdx = e.dataTransfer.getData('colIdx');
    const tempCols = [...columns];

    tempCols[draggedColIdx] = columns[droppedColIdx];
    tempCols[droppedColIdx] = columns[draggedColIdx];
    this.setState({ columns: tempCols })
    this.setState({ dragOver: '' })
  }


	render() {
		const { beatles, columns, dragOver } = this.state
		
		return (
			<Table>
				<Caption>Reorder Columns Demo</Caption>
				<THead>
					<TR>
            {columns.map(col => (
                <StyledTh
                    id={col}
                    key={col}
                    draggable
                    onDragStart={this.handleDragStart}
                    onDragOver={this.handleDragOver}
                    onDrop={this.handleOnDrop}
                    onDragEnter={this.handleDragEnter}
                    dragOver={col === dragOver}
                  >
                    {col}
                </StyledTh>
            ))}
					</TR>
				</THead>
				<TBody>
          {beatles.map(beatle => (
              <TR key={beatle.id}>
                {Object.entries(beatle).map(([k, v], idx) => (
                  <Cell key={v} dragOver={columns[idx] === dragOver}>
                    {beatle[columns[idx]]}
                  </Cell>
                ))}
              </TR>
            ))}
				</TBody>
        <TFoot>
					<TR>
						<TH colSpan="7">(c) footer</TH>
					</TR>
				</TFoot>
			</Table>
		)
	}
}

const Cell = styled.td`
  border-left: ${({ dragOver }) => dragOver && '5px solid red'};
`

const StyledTh = styled.th`
  cursor: move; 
  border-left: ${({ dragOver }) => dragOver && '5px solid red'};
`;


