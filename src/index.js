import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './component/detail/Detail';
import Update from './component/update/Update';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
     <Routes>
      <Route path='/' element={ <App />}></Route>
      <Route path='/detail/:id' element={ <Detail />}></Route>
      <Route path='/detail/update/:id' element={ <Update />}></Route>


     </Routes>
    </Provider>
  </BrowserRouter>
);


reportWebVitals();
