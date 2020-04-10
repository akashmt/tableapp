import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Dashboard, Tabledemo, Flex, Chart, Counter, Tourapp } from '../../features'

import { BeatlesTable } from '../../features/tableapp/beatles'
import { TableTemplate } from '../../features/tableapp/template'
import { TableColumnFilters, TextMatch, DropDown, 
				 DropDownBoolean, DropDownRange, RangeSelector, 
				 RangeSliderSelector } from '../../features/tableapp/_TODOS/filter'
import { TableButtons, SelectRowsSend, SelectColumnsSend, 
				 SaveSend } from '../../features/tableapp/_TODOS/buttons'
import { TableColumns, CollapseColumn, CollapseColumnClick, 
				 FreezeColumn, FreezeSelectedColumn, FreezeSelectedColumnOrder, 
				 ReorderColumns, ResizeColumnWidth, 
				 SelectColumnCheckbox, SelectColumnRadio } from '../../features/tableapp/_TODOS/columns'
import { TableRows, SelectRowCheckbox, SelectRowRadio, CollapseRow } from '../../features/tableapp/_TODOS/rows'
import { TableColumnSorting, AscDsc, ClearAndReset, 
				 MultiColumnSort } from '../../features/tableapp/_TODOS/sort'
import { SelectRow, SelectRowsDrag, SelectRowsCheckbox, SelectColumn, SelectColumnsDrag, SelectColumnsCheckbox,
         SelectCell, SelectRowColumnCells, 
				 EditCell, DeleteRow, AddRow, 
				 ContextMenu, ContextMenuAction } from '../../features/tableapp/_TODOS/operation'
import { DemoTable, OptionsTable } from '../../features/tableapp/_TODOS/table'
import { Tablefull } from '../../features/tablefull'
// import { WorkspacePageNotFound } from '../../components'

export function WorkspaceRoutes() {
	return (
		<Switch>
			<Route exact path="/workspace" component={Dashboard} />

			{/*** TABLEAPP ROUTES  ***/}
			<Route exact path="/workspace/tableapp" component={TableTemplate} />
			<Route exact path="/workspace/tableapp/beatles" component={BeatlesTable} />
			
			{/* Filter routes  */}
			<Route exact path="/workspace/tableapp/filter" component={TableColumnFilters} />
			<Route exact path="/workspace/tableapp/filter/textmatch" component={TextMatch} />
			<Route exact path="/workspace/tableapp/filter/dropdown" component={DropDown} />
			<Route exact path="/workspace/tableapp/filter/dropdownboolean" component={DropDownBoolean} />
			<Route exact path="/workspace/tableapp/filter/dropdownrange" component={DropDownRange} />
			<Route exact path="/workspace/tableapp/filter/rangeselector" component={RangeSelector} />
			<Route exact path="/workspace/tableapp/filter/rangeslider" component={RangeSliderSelector} />

			{/* Button routes */}
			<Route exact path="/workspace/tableapp/buttons" component={TableButtons} />
			<Route exact path="/workspace/tableapp/buttons/selectrow" component={SelectRowsSend} />
			<Route exact path="/workspace/tableapp/buttons/selectcolumn" component={SelectColumnsSend} />
			{/* <Route exact path="/workspace/tableapp/buttons/save" component={SaveSend} /> */}

			{/* Columns routes */}
			<Route exact path="/workspace/tableapp/columns" component={TableColumns} />
			<Route exact path="/workspace/tableapp/columns/collapse" component={CollapseColumn} />
			<Route exact path="/workspace/tableapp/columns/collapseclick" component={CollapseColumnClick} />
			<Route exact path="/workspace/tableapp/columns/freeze" component={FreezeColumn} />
			<Route exact path="/workspace/tableapp/columns/selectfreeze" component={FreezeSelectedColumn} />
			<Route exact path="/workspace/tableapp/columns/selectorderfreeze" component={FreezeSelectedColumnOrder} />
			<Route exact path="/workspace/tableapp/columns/reorder" component={ReorderColumns} />
			<Route exact path="/workspace/tableapp/columns/resize" component={ResizeColumnWidth} />
																								{/* SAVE button sends data to console */}
			<Route exact path="/workspace/tableapp/columns/selectcheckbox" component={SelectColumnCheckbox} />
			<Route exact path="/workspace/tableapp/columns/selectradio" component={SelectColumnRadio} />

			{/* Rows routes */}
			<Route exact path="/workspace/tableapp/rows" component={TableRows} />
			<Route exact path="/workspace/tableapp/rows/collapse" component={CollapseRow} />
																								{/* SAVE button sends data to console */}
			<Route exact path="/workspace/tableapp/rows/selectcheckbox" component={SelectRowCheckbox} />
			<Route exact path="/workspace/tableapp/rows/selectradio" component={SelectRowRadio} />

			{/* Sort routes */}
			<Route exact path="/workspace/tableapp/sort" component={TableColumnSorting} />
			<Route exact path="/workspace/tableapp/sort/ascdsc" component={AscDsc} />
																								{/* RESET button goes back to default */}
			<Route exact path="/workspace/tableapp/sort/clear" component={ClearAndReset} />
			<Route exact path="/workspace/tableapp/sort/multicolumn" component={MultiColumnSort} />

			{/* Operations routes */}
			<Route exact path="/workspace/tableapp/operations/add" component={AddRow} />
			<Route exact path="/workspace/tableapp/operations/edit" component={EditCell} />
			<Route exact path="/workspace/tableapp/operations/deleterow" component={DeleteRow} />
			<Route exact path="/workspace/tableapp/operations/selectrow" component={SelectRow} />
			<Route exact path="/workspace/tableapp/operations/selectrowsdrag" component={SelectRowsDrag} />
			<Route exact path="/workspace/tableapp/operations/selectrowscheckbox" component={SelectRowsCheckbox} />
			<Route exact path="/workspace/tableapp/operations/selectcolumn" component={SelectColumn} />
			<Route exact path="/workspace/tableapp/operations/selectcolumndrag" component={SelectColumnsDrag} />
			<Route exact path="/workspace/tableapp/operations/selectcolumnscheckbox" component={SelectColumnsCheckbox} />
      <Route exact path="/workspace/tableapp/operations/select" component={SelectCell} />
			<Route exact path="/workspace/tableapp/operations/selectrowcolumncells" component={SelectRowColumnCells} />

																									{/* Right click menu */}
			<Route exact path="/workspace/tableapp/operations/contextmenu" component={ContextMenu} />
																									{/* Right click menu 'Apple' */}
			<Route exact path="/workspace/tableapp/operations/contextmenuaction" component={ContextMenuAction} />

			{/*** DEMOTABLE ROUTES  ***/}
																									{/* Swiitches demo */}
			<Route exact path="/workspace/tableapp/table/demotable" component={DemoTable} />
      <Route exact path="/workspace/tableapp/table/optionstable" component={OptionsTable} />
      

			{/*** TABLEDEMO ROUTES  ***/} {/* Paginiation, Records per page, Sorting, Search */}
			<Route exact path="/workspace/tabledemo" component={Tabledemo} />

			{/*** FLEX ROUTES  ***/} {/* Ignore */}
			<Route exact path="/workspace/flex" component={Flex} />

			{/*** CHART ROUTES  ***/} {/* Ignore */}
			<Route exact path="/workspace/chart" component={Chart} />

			{/*** COUNTER ROUTES  ***/} {/* Ignore */}
			<Route exact path="/workspace/counter" component={Counter} />

			{/*** TOURAPP ROUTES  ***/} {/* Cool!! */}
			<Route exact path="/workspace/tourapp" component={Tourapp} />

			{/*** TABLEFULL ROUTES  ***/} {/* Start combining actions -- wiith Json Data*/}
			<Route exact path="/workspace/tablefull" component={Tablefull} />

			{/* <Route component={WorkspacePageNotFound} /> */}
		</Switch>
	)
}