import {
    FETCH_SMURF_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    CREATE_SMURF_START,
    CREATE_SMURF_SUCCESS,
    CREATE_SMURF_FAILURE,
    DELETE_SMURF_START,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_FAILURE
} from '../actions'

const initialState = {
    isLoading: false,
    smurf: null,
    error: ''
  };
  
  export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isLoading:true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading:false,
                smurf: {
                    smurfs:action.payload
                }
            }
        case FETCH_FAILURE:
            return{
                ...state,
                isLoading:false,
                error: action.payload
            }
        case CREATE_SMURF_START:
            return{
                ...state,
                isLoading: true
            }
        case CREATE_SMURF_SUCCESS:
            return{
                ...state,
                isLoading:false,
                smurf: {
                    smurfs: action.payload
                }
            }
        case CREATE_SMURF_FAILURE:
            return{
                ...state,
                isLoading:false,
                error: action.payload
            }
        case DELETE_SMURF_START:
            return{
                ...state,
                isLoading: true
            }
        case DELETE_SMURF_SUCCESS:
            return{
                ...state,
                isLoading:false,
                smurf: {
                    smurfs: action.payload
                }
            }
        case DELETE_SMURF_FAILURE:
            return{
                ...state,
                isLoading:false,
                error: action.payload
            }

        default:
            return state;
    }
  };
  