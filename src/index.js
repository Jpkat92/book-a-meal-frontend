import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './helpers/store'
import './index.css';
import { BookAMeal } from './BookAMeal';

ReactDOM.render(
<Provider store={store}>
    <BookAMeal />
</Provider>, document.getElementById('root'));
