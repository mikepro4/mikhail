import { assign } from "lodash";
import update from "immutability-helper";

import {
	SHOW_APP_MENU,
	HIDE_APP_MENU,
	TOGGLE_THEME,
} from "../actions/types";

export const initialState = {
	theme: "dark",
	menuOpen: false,
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
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
