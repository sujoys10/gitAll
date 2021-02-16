const { GET_PHOTOS_PENDING, GET_PHOTOS_FAILED, GET_PHOTOS_SUCCESS } = require("../actionTypes");

export const fetchPhotos = (searchTerm, page) => async(dispatch) => {
    dispatch({ type: GET_PHOTOS_PENDING})
    try{
        const res = await fetch(`https://api.unsplash.com/search/photos/?query=${searchTerm}&page=${page}&per_page=4`,{
            headers: {
                Authorization: "Client-ID haIRKtGI1nIVMEkATMeAX_YR6PFZzNMjhYfPoS3wK_I"
            }
        })
        const data = await res.json();
        dispatch({
            type: GET_PHOTOS_SUCCESS,
            payload: data
        })
    }catch(err){
        dispatch({ type: GET_PHOTOS_FAILED})
    }
} 



