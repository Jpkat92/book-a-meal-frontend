import React from 'react'
import PropTypes from 'prop-types'

const Order = ({ onClick, mealName, dateSubmitted}) => (
    <li
      onClick={onClick}
    >
      {mealName} -- {dateSubmitted}
    </li>
  )

  Order.propTypes = {
    onClick: Prototypes.func.isRequired,
    mealName: PropTypes.string.isRequired,
    dateSubmitted: PropTypes.number.isRequired
  }

  export default Order;
