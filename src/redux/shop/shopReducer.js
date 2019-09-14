import { ShopActionTypes } from './shopTypes';

const INITIAL_STATE = {
    collections: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    };
};