import React from 'react';
import ReactDom from 'react-dom';
import '@babel/polyfill';
import App from './App';
import '../public/bootstrap.css';
const root = document.getElementById('root');
ReactDom.render(<App />, root);
