
import { combineReducers } from 'redux';
import * as actionTypes from './actionType';




const dishReducer = (dishState = { isLoading: false, dishes: [] }, action) => {
    switch (action.type) {
        case actionTypes.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                dishes: []
            }
        case actionTypes.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                dishes: action.payload
            }
        default:
            return dishState;
    }

}

const commnetReducer = (commentState = { isLoading: true, comment: [] }, action) => {
    switch (action.type) {
        case actionTypes.LOAD_COMMENTS:
            return {
                ...commentState,
                isLoading: false,
                comments: action.payload
            };
        case actionTypes.COMMENT_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: []
            }
        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            //console.log(comment);
            return {
                ...commentState,
                comments: commentState.comment.concat(comment)
            }
        default:
            return commentState;
    }
}
export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commnetReducer
});




