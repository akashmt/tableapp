import React from 'react'

export function LoginForm() {
	return (
		<form>
			<div>
				<h3>Login Form</h3>
			</div>
			<div>
				<input type="text"/>
			</div>
			<div>
				<input type="password"/>
			</div>
			<div>
				<button>Login</button>
			</div>
			<small>
				<a href="">Register</a> | <a href="">Forgot my password</a>
			</small>
		</form>
	)
}
