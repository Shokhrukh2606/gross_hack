import  {clientsConstants} from './constants'

const initialState = {
  all: "",
  one: "",
  loading: false,
  error: ""
}

export function allClients(state = initialState, action) {
  switch (action.type) {
    case clientsConstants.FETCH_ALL_CLIENTS_BEGIN:
      return {
        ...state,
        loading: true
      }
    case clientsConstants.FETCH_ALL_CLIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        fields: action.payload.data,
      }
    case clientsConstants.FETCH_ALL_CLIENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default: return state;
  }
}
