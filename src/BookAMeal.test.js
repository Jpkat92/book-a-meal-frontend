import React from 'react';
import ReactDOM from 'react-dom';
import BookAMeal from './BookAMeal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookAMeal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
