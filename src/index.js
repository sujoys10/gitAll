import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import AppRouter from './AppRouter'
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

const appRoot = document.getElementById('app');
ReactDOM.render(
        <App />
, appRoot)