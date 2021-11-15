import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Images from './images/Images';
import UploadImage from './images/UploadImage';
import './index.css';
import { Provider } from 'react-redux';
import configureAppStore from './configureAppStore';

const store = configureAppStore()

const renderApp = () => (
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="images" element={<Images/>} >
                <Route path="upload" element={<UploadImage />} />
              </Route>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
)

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp)
}

renderApp()


