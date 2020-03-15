const initial_state = {
    loading: false,
    result: '',
    error: ''
}



const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

const request = () => {
    return {
        type: REQUEST
    }
}

const success = (result) => {
    return {
        type: SUCCESS,
        payload: result
    }
}

const failure = (error) => {
    return {
        type: FAILURE,
        payload: error
    }
}

export const signup_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case SUCCESS: {
            return {
                ...state,
                result: action.payload
            }
        }
        case FAILURE: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state
    }
}


export const signup_user_action = (data) => {
    console.log('data will be post here');
}