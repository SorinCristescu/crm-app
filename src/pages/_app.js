import '../styles/globals.css';

// REDUX
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from '../redux';
import { persistor } from '../redux';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
