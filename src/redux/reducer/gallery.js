import { GET_PHOTOS_PENDING, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILED } from "../actionTypes";

const initialState = {
    images: [],
    loading: false,
    error: false
};
const imageReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PHOTOS_PENDING:
            return Object.assign({}, state, { loading: true })
        case GET_PHOTOS_SUCCESS:
            console.log(state, action)
            return {
                ...state, loading: false, images: [...state.images, ...action.payload.results]
            }
        case GET_PHOTOS_FAILED:
            return Object.assign({}, state, {error: true})
        default:
            return state            
    }
}

export default imageReducer;