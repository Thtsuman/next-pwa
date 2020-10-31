import types from "../types"
const INITIAL_STATE = {
	counter: 0,
}

const appReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.ADD_TO_COUNTER:
			return { ...state, counter: state.counter + 1 }
		case types.REDUCE_FROM_COUNTER:
			return { ...state, counter: state.counter - 1 }
		default:
			return state
	}
}

export default appReducer
