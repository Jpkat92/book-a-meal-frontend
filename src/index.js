import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './helpers/store'
import './index.scss';
import { BookAMeal } from './components/BookAMeal';

const store = configureStore();

ReactDOM.render(
<Provider store={store}>
    <BookAMeal />
</Provider>, document.getElementById('root'));
