import { assign } from "lodash";
import update from "immutability-helper";

import {
	SHOW_APP_MENU,
	HIDE_APP_MENU,
    TOGGLE_THEME,
    FETCH_AUTH,
    AUTH_CLEAR,
    UPDATE_TOTAL_PIXELS,
	UPDATE_TOTAL_SCROLLED_PIXELS,
	SCROLL_TO,
    SCROLL_TO_RESET,
    UPDATE_COLLECTION
} from "../actions/types";

export const initialState = {
    totalPixels: 0,
	clientWidth: 0,
	clientHeight: 0,
	totalScrolledPixels: 0,
	scrollTo: null,
	theme: "dark",
    menuOpen: false,
    user: null,
    updateCollection: false
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
        case UPDATE_TOTAL_PIXELS:
            return {
                ...state,
                totalPixels: action.total,
                clientWidth: action.clientWidth,
                clientHeight: action.clientHeight
            } ;
        case UPDATE_TOTAL_SCROLLED_PIXELS:
            return {
                ...state,
                totalScrolledPixels: action.pixels
            };
        case UPDATE_COLLECTION:
            return {
                ...state,
                updateCollection: action.payload
            };
		default:
			return state;
	}
};

