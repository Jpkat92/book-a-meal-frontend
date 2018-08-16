import React from 'react'
import PropTypes from 'prop-types'

const Meal = ({ onClick, name, price }) => (
    <li
      onClick={onClick}
    >
      {name} -- {price}
    </li>
  )

  Meal.propTypes = {
    onClick: Prototypes.func.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }

  export default Meal;
