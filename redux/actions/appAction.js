import types from "../types"

export const changeCounter = (bool) => (dispatch) => {
	bool ? dispatch({ type: types.ADD_TO_COUNTER }) : dispatch({ type: types.REDUCE_FROM_COUNTER })
}
