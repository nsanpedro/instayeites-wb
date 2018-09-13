import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Root reducer imports
import rootReducer from './reducers/index';

// Data imports
import comments from './data/comments';
import posts from './data/posts';


// Default data obj

const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
  module.hot.accept('./reducers/', () => {
      const nextRootReducer = require('./reducers/index').default;
      store.replaceReducer(nextRootReducer);
  });
}

export default store;
