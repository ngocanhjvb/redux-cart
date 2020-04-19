var Istate = {
    by: 'nameeee',
    value: 1
}


let myReducers = (state = Istate, action) => {
    switch (action.type) {
        case 'SORT':
            var {by, value} = action.sort;
            state = {
                by: by,
                value: value
            }
            return state;
        default:
            return state
    }
}

export default myReducers

