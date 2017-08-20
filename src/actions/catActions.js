// import default cat api
import catApi from '../api/catApi';

// export, so we can import
// a function returns a function
// function is like a value
export function loadCats() {
  // we can use dispatch or getState
  return function(dispatch) {
    // return api
    // api gets all cat
    // then
    // returned var, dispatch, load cats good
    return catApi.getAllCats().then(cats => {
      dispatch(loadCatsSuccess(cats));
    }).catch(error => {
      // errors
      throw(error);
    });
  };
}
