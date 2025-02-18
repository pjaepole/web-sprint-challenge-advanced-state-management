import axios from 'axios';
export const SMURFS_FETCH_START="SMURFS_FETCH_START";
export const SMURFS_FETCH_SUCCESS="SMURFS_FETCH_SUCCESS"
export const SMURFS_FETCH_ERROR="SMURFS_FETCH_ERROR"
export const SMURFS_ADD_SMURF="SMURFS_ADD_SMURF"
export const SMURFS_ADD_ERROR="SMURFS_ADD_ERROR"
export const fetchSmurfs=()=>dispatch=>{
    dispatch(smurfsFetchStart());

    axios.get('http://localhost:3333/smurfs')
    .then(resp=>{
        dispatch(smurfsFetchSuccess(resp.data))
    })
    .catch(err=>{
        dispatch(smurfsFetchError(err))
    })
    
}
export const smurfsFetchStart=()=>{
    return({type:SMURFS_FETCH_START})
}
export const smurfsFetchSuccess=(smurfs)=>{
    return({type:SMURFS_FETCH_SUCCESS, payload:smurfs})
}
export const smurfsFetchError=(error)=>{
    return({type:SMURFS_FETCH_ERROR, payload:error})
}
export const smurfsAddSmurf=(smurf)=>{
    return({type:SMURFS_ADD_SMURF,payload:smurf})
}
export const smurfsAddError=(msg)=>{
    return({type:SMURFS_ADD_ERROR,payload:msg})
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.