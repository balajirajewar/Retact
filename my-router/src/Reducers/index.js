const initState= {
    fetching:false,
    users:[],
    error:null
}
const userDataReducer =(state=initState , action)=>{
    switch(action.type){
        case "API_CALL_REQUEST":
        return{
            ...state, fetching:true, error:null
        }
        case "API_CALL_SUCCESS":
            return{
            ...state, fetching:false, users:action.payload

            }
        case "API_CALL_FAILURE":
            return{
                ...state, fetching:false,users:null, error:action.payload
            }     
         
       default:
        return state;

    }
}

export default userDataReducer