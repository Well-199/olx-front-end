const initiaState = {
    email: ''
}

const userReducer = (state = initiaState, action) => {

    if(action.type==='SET_EMAIL'){
        return { ...state, email: action.payload.email }
    }

    return state;
}

export default userReducer