let Istate = false

let myReducers = (state = Istate, action) => {
    switch (action.type) {
        case 'TOGGLE_STATUS':
            state = !state;
            return state
        default:
            return state
    }
}

export default myReducers

