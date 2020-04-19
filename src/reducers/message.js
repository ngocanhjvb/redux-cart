import * as type from '../constants/ActionTypes'

var initialState = ''


const message = (state = initialState, action) => {
    switch (action.type) {
        case type.CHANGE_MESSAGE:
            state = action.message
            return [...state];
        default:
            return [...state];

    }
}

export default message;
