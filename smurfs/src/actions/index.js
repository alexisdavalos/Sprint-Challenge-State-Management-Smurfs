import axios from 'axios';

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const CREATE_SMURF_START = "CREATE_SMURF_START";
export const CREATE_SMURF_SUCCESS = "CREATE_SMURF_SUCCESS";
export const CREATE_SMURF_FAILURE = "CREATE_SMURF_FAILURE";
export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";


export const fetchSmurfs = () => dispatch => {
	dispatch({ type: FETCH_SMURF_START });
	axios.get('http://localhost:3333/smurfs')
		.then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data}))
		.catch(err => dispatch({ type: FETCH_FAILURE, payload: err }))
};

export const createSmurf = (smurf) => dispatch => {
    dispatch({ type: CREATE_SMURF_START });
    axios.post(`http://localhost:3333/smurfs`, smurf)
    .then(res => dispatch({ type: CREATE_SMURF_SUCCESS, payload: res.data })) 
    .catch(err => dispatch({ type: CREATE_SMURF_FAILURE, payload: err }));
  };

  export const deleteSmurf = (id) => dispatch => {
    dispatch({ type: CREATE_SMURF_START });
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DELETE_SMURF_FAILURE, payload: err }));
  };
