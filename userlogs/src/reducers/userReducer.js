import { REGISTER_USER,
         USER_REGISTERED,
         } from '../actions';

const initialState = {
    error: null
}

export const friendReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_USER:
            return {
                ...state,
                error: '',
            };
        case USER_REGISTERED:
            return {
                ...state,
                curUser: action.payload,
                error: ''
            };
        default:
            return state;
        }
}
