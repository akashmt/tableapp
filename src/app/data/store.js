import { createStore } from 'redux'

export default () => {
	const appStore = createStore((state = { data: "none" }, action) => {
		console.log("store is running..")
		return state
	})

	return appStore
}