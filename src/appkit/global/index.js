import React from 'react'
import { Normalize, Milligram, AppKitMilligram, AppKitBase, Bootstrap } from '../vendors'

export function AppGlobalStyles(){
  return (
		<>
			<Normalize/>
			<Milligram/>{/*  Milligram-Official */}
			{/* <AppKitMilligram/> AppKit-Milligram Modularize */}
			{/* <AppKitBase/> AppKit-Base (Milligram-Overrides) */}
			{/* <Bootstrap/> Bootstrap-Official */}
		</>
	)
}

export default AppGlobalStyles