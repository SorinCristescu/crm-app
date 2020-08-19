import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware = [logger, thunk];
const composeEnhancers = composeWithDevTools({
  trace: true,
  realtime: true,
  name: 'CRM App',
  hostname: 'localhost',
  port: 3000,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authentication', 'navigation', 'user', 'project'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);
export default store;
