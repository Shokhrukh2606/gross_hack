import clientsConstants from './constants'


export const fetchAllClientsBegin = () => {
  return {
    type: clientsConstants.FETCH_ALL_CLIENTS_BEGIN
  }
}
export const fetchAllClientsSuccess=(data)=>{
  return {
    type: clientsConstants.FETCH_ALL_CLIENTS_SUCCESS,
    payload: data
  }
}
export const fetchAllClientsError = (error) => {
  return {
    type: FETCH_ALL_CLIENTS_ERROR,
    payload: error
  }
}
