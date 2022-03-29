import * as ActionTypes from './ActionTypes'
export const StaffsReducer =(state={
    isLoading:true,
    errMess:null,
    staffs:[]
},action)=>{
    switch (action.type){
        case ActionTypes.STAFFS_SUCCESS:
            return{...state,isLoading:false,errMess:null,staffs:action.payload}
        case ActionTypes.STAFFS_FAILED:
            return{...state,isLoading:false,errMess:action.payload,staffs:[]}
        case ActionTypes.STAFFS_LOADING:
            return{...state,isLoading:true,errMess:null,staffs:[]}
        case ActionTypes.ADD_USER:
            return{...state,staffs:state.staffs.concat(action.payload)}
        case ActionTypes.MODIFY_USER:
            return{...state,staffs:state.staffs.map(staff=>staff.id===action.payload.id?action.payload:staff)}
        default:
            return state;
    }
}
