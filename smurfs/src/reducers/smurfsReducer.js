const initialState = {
    title: 'I am inside the reducer',
    isLoading: false,
    smurf: null,
    error: ''
  };
  
  export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  