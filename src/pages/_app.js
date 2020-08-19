import '../styles/globals.css';

// REDUX
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from '../redux';
import { persistor } from '../redux';

// COMPONENTS
import Layout from '../layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
