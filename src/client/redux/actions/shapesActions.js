import moment from "moment";
import * as _ from "lodash";
import qs from "qs";
import axios from "axios";

import {
	LOAD_SHAPE
} from "./types";

export const createShape = (shapeItem, success) => async (
    dispatch,
	getState,
	api
) => {

    await api
        .post("/shapes/create", shapeItem)
        .then(response => {
            if (success) {
                success(response.data);
            }
        })
        .catch(() => {
            
        });
}

// ===========================================================================



export const loadShape = (id, success) => async (
    dispatch,
	getState,
	api
) => {

   

    await api
        .post("/shapes/item", { shapeId: id })
        .then(response => {
            if (success) {
                success(response.data);
            }

            dispatch({
                type: LOAD_SHAPE,
                payload: response.data
            });
        })
        .catch(() => {
            // dispatch(authError('Account with this email already exists'));
        });
}


// ===========================================================================


export const searchShapes = (type, identifier, offset, limit, query, success) => async (
    dispatch,
	getState,
	api
) => {
    let criteria 

    if(type == "user") {
        criteria = {
            createdBy: identifier
        }
    }

    await api
        .post("/shapes/search", {
            criteria: criteria,
            sortProperty: "createdAt",
            offset: offset,
            limit: limit,
            order: "-1"
        })
        .then(response => {
            if (success) {
                success(response.data);
            }
        })
        .catch(() => {
        });
}

// ===========================================================================


export const deleteShape = (shapeId, shapeItem, success) => async (
    dispatch,
	getState,
	api
) => {
    await api
        .post("/posts/delete", { shapeId: shapeId, shape: postshapeItemItem })
        .then(response => {
            if (success) {
                success(response.data);
            }
        })
        .catch(() => {
        });
}

// ===========================================================================


export const updateShape = (shape, data, success) => async (
    dispatch,
	getState,
	api
) => {

    let newMetadata = _.merge({}, shape.metadata, {
        title: data.title
    })

    let newShape = {
        ...shape,
        metadata: newMetadata
    }


    await api
        .post("/shape/update", { 
            shapeId: newShape._id, 
            metadata: newShape.metadata,
            defaultViz: newShape.defaultViz,
            status: newShape.status
        })
        .then(response => {
            if (success) {
                success(response.data);
            }
        })
        .catch(() => {
        });
}


// ===========================================================================

