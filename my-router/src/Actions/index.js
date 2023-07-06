export const API_CALL_REQUEST = 'API_CALL_REQUEST';
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
export const API_CALL_FAILURE = 'API_CALL_FAILURE';

export const getData =()=>{
    return{
         type :API_CALL_REQUEST,
     }
}
export const getDataSuccess = (users) =>{
    return{
        type:API_CALL_SUCCESS,
        payload:users
    }
} 
export  const getDataFail= (error)=>{
    return{
        type:API_CALL_FAILURE,
        payload:error
 }
}
       
