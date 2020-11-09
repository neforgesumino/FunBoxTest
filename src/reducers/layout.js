import { actionTypes } from "actions/layout";

export default function layout(state = initialState, action) {
    switch (action.type) {
        case actionTypes.TOGGLE_NAVBAR:
            return { ...state, navbar: !state.navbar };
        default:
            return { ...state };
    }
}
