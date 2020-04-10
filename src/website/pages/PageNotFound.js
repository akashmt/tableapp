import React from 'react'
import { Link } from 'react-router-dom'

export function PageNotFound() {
	return (
		<>
			<h2>404</h2>
			<p>Page Not Found. Please go <Link to="/">home</Link>.</p>
		</>
	)
}