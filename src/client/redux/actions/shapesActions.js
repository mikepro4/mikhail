import moment from "moment";
import * as _ from "lodash";
import qs from "qs";
import axios from "axios";


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
        .post("/shapes/item", { id })
        .then(response => {
            if (success) {
                success(response.data);
            }
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


export const updateShape = (shapeId, shapeItem, success) => async (
    dispatch,
	getState,
	api
) => {

    await api
        .post("/shape/update", { 
            postId, 
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

