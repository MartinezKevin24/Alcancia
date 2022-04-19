import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import storeFn from "./store"
import {Provider} from "react-redux";
import {persistStore} from "redux-persist";
import {PersistGate} from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = storeFn();
const persist = persistStore(store)


root.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate persistor={persist}>
              <App />
          </PersistGate>
      </Provider>
  </React.StrictMode>
);
