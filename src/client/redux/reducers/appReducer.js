import { assign } from "lodash";
import update from "immutability-helper";

import {
	SHOW_APP_MENU,
	HIDE_APP_MENU,
    TOGGLE_THEME,
    FETCH_AUTH,
	AUTH_CLEAR,
} from "../actions/types";

export const initialState = {
	theme: "dark",
    menuOpen: false,
    user: null,
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
        case FETCH_AUTH:
			return {
				...state,
				user: action.payload
			}
		case AUTH_CLEAR:
			return {
				...state,
				user: null
			}
		case SHOW_APP_MENU:
			return {
				...state,
				menuOpen: true
			}
		case HIDE_APP_MENU:
			return {
				...state,
				menuOpen: false
			}
		case TOGGLE_THEME:
			return {
				...state,
				theme: action.payload
			}
		default:
			return state;
	}
};

