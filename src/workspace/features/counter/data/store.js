import { createStore } from 'redux'

export default () => {
	const counterStore = createStore((state = { counter: 0 }, action) => {
		switch(action.type) {

			case "INCREMENT":
				const adding = typeof action.incBy === "number" ? action.incBy : 1
				return {
					counter: state.counter + adding
				}

			case "DECREMENT":
				const subtracting = typeof action.decBy === "number" ? action.decBy : 1
				return {
					counter: state.counter - subtracting
				}

			case "SET":
				const setting = typeof action.setBy === "number" ? action.setBy : 20
				return {
					counter: setting
				}

			case "RESET":
				return {
					counter: 0
				}

			default:
				return state
		}
	})

	return counterStore
}