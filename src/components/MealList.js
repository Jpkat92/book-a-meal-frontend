import React, { Component } from "react";
 
const meals = [
    {
        id: "1",
        name: "Rice and Chicken",
        price: "13.5"
    },
    {
        id: "2",
        name: "Rice and Fish",
        price: "12.5"
    },
    {
        id: "3",
        name: "Posho and Beans",
        price: "14.5"
    },
    {
        id: "4",
        name: "Chips Masala",
        price: "10.5"
    },
    {
        id: "5",
        name: "Potatoes and Meat",
        price: "12.5"
    },
    {
        id: "6",
        name: "Fries and Beef",
        price: "15.5"
    },
]
import React from 'react'
import PropTypes from 'prop-types'
import Meal from './Meal'
​
const MealList = ({ meals, onMealClick }) => (
  <ul>
    {meals.map((todo, index) => (
      <Meal key={index} {...meal} onClick={() => onMealClick(index)} />
    ))}
  </ul>
)
​
MealList.propTypes = {
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  onMealClick: PropTypes.func.isRequired
}
​
export default MealList
