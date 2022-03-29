import * as ActionTypes from './ActionTypes'
import { BaseUrl } from '../shared/BaseUrl'
import axios from 'axios'
export const staffLoading =()=>({
    type: ActionTypes.STAFFS_LOADING
})
export const staffSuccess=(staffList)=>({
    type:ActionTypes.STAFFS_SUCCESS,
    payload:staffList
})
export const staffFailed = (errMess)=>({
    type:ActionTypes.STAFFS_FAILED,
    payload:errMess
})
export const fetchStaff = ()=>{
    return (dispatch)=>{
        dispatch(staffLoading())
        axios.get(BaseUrl+'users')
        .then(response=>{
            const staffList = response.data
            setTimeout(()=>{dispatch(staffSuccess(staffList))},2000)

        })
        .catch(err=>{
            const errMess = err.message
            dispatch(staffFailed(errMess))
        })
    }
}
export const addUser =(newUser) =>({
    type:ActionTypes.ADD_USER,
    payload:newUser
})
export const postUser = (userobj)=>{
    return(dispatch)=>{
        axios.post(BaseUrl+'users',userobj)
        .then(response=>{
            console.log('respone',response)
            const newUser = response.data
            console.log('newUser',newUser)
            dispatch(addUser(newUser))
        })
        .catch(err=>{
            const errMess = err.message
            dispatch(staffFailed(errMess))
        })
    }
}
export const modifyUser = (StaffUpdate)=>({
    type:ActionTypes.MODIFY_USER,
    payload:StaffUpdate
})
export const pathUser = (userid)=>{
    return (dispatch)=>{
        axios.patch(BaseUrl+'users/'+userid)
        .then(response=>{
            const usermodified = response.data
            dispatch(modifyUser(usermodified))
        })
        .catch(err=>{
            const errMess = err.message
            dispatch(staffFailed(errMess))
        })
    }
}