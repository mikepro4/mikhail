import * as _ from "lodash";
import update from "immutability-helper";

import {
    DEMO_ON,
    DEMO_OFF,
	SHOW_APP_MENU,
	HIDE_APP_MENU,
    TOGGLE_THEME,
    FETCH_AUTH,
    AUTH_CLEAR,
    UPDATE_TOTAL_PIXELS,
	UPDATE_TOTAL_SCROLLED_PIXELS,
	SCROLL_TO,
    SCROLL_TO_RESET,
    UPDATE_COLLECTION,
    SHOW_DRAWER,
    HIDE_DRAWER,
    ACTIVATE_KEY,
    DEACTIVATE_KEY
} from "../actions/types";

export const initialState = {
    demoMode: false,
    totalPixels: 0,
	clientWidth: 0,
	clientHeight: 0,
	totalScrolledPixels: 0,
	scrollTo: null,
	theme: "dark",
    menuOpen: false,
    user: null,
    updateCollection: false,
    drawerOpen: false,
    drawerType: null,
    drawerData: {},
    allKeys: [16, 69, 82],
    activeKeys: []
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
        case DEMO_ON:
			return {
				...state,
				demoMode: true
            }
        case DEMO_OFF:
            return {
                ...state,
                demoMode: false
            }
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
        case SHOW_DRAWER:
            let drawer

            if(action.drawerData) {
                drawer = action.drawerData
            } else {
                drawer = state.drawerData
            }
            return {
                ...state,
                drawerOpen: true,
                drawerType: action.payload,
                drawerData: drawer
            }
        case HIDE_DRAWER:
            return {
                ...state,
                drawerOpen: false,
                drawerType: null,
                drawerData: null,
                suggestions: []
            }
        case ACTIVATE_KEY:
            let activeKeys = []

            let keyToActivateIndex = _.findIndex(state.activeKeys, action.payload);


            if(keyToActivateIndex < 0) {
                let newKeys = _.union(state.activeKeys, [action.payload])
                return {
                    ...state,
                    activeKeys: newKeys
                }
            } else {
                return {
                    ...state
                }
            }
            
        case DEACTIVATE_KEY:

            let keyToDeactivateIndex = _.findIndex(state.activeKeys, action.payload);

            if(keyToDeactivateIndex) {
                return update(state, {
                    activeKeys: { $splice: [[keyToDeactivateIndex, 1]] }
                });
            } else {
                return {
                    ...state
                }
            }
            
		default:
			return state;
	}
};

