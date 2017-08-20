// What is store?
// store remembers the state of the app.
// createStore returns 3 things, getState, dispatch, subscribe
//
// Because store remembers the state of app, so it needs reducers.
// and any middleWare to help the job done.
import {createStore, applyMiddleware} from 'redux';
// rootReducer contains sub reducers
import rootReducer from '../reducers/rootReducer';
// so thunx is a function returns a function....
// redux thunk glues with redux and thunk

/*

// This is a thunk, because it returns a function
// redux-thunk also passes dispatch, getState into it.
//
function logOutUser() {
	return function(dispatch, getState) {
		return axios.post('/logout').then(function() {
			// pretend we declared an action creator
			// called 'userLoggedOut', and now we can dispatch it
			dispatch(userLoggedOut());
		});
	}
}

It seems redux thunk will call all thunks...

*/
import thunk from 'redux-thunk';

// export vs module.exports
// export never return, just reference
// module.exports actually return somethingß
export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
