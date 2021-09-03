import {
    LOAD_SHAPE,
    CLEAR_SHAPE
} from '../actions/types';

export const initialState = {
    currentShape: {},
    newShape: {}
};

  
export const shapeReducer = function(state = initialState, action) {
    switch(action.type) {
        case LOAD_SHAPE:
            return { ...state,
                currentShape: action.payload
            };
        case CLEAR_SHAPE:
            return { ...state,
                currentShape: null
            };
        }

    return state;
}
