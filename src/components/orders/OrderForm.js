import React from 'react';
import PropTypes from 'prop-types'
import NumberInput from '../common/forms/numberInput';
import SelectInput from '../common/forms/selectInput';

const OrderForm = ({order, allMenuMeals, onSave, onChange, saving, errors}) => {
  return (
    <form>
        <h1>Manage order</h1>
        <SelectInput
            name="mealId"
            label="Meal"
            value={allMenuMeals.id}
            defaultOption="Select Meal to Order"
            options={allMenuMeals}
            onChange={onChange} error={errors.mealId}/>

        <NumberInput
            name="price"
            label="Price"
            value={order.price}
            onChange={onChange}
            error={errors.price}/>

        <input
            type="submit"
            disabled={saving}
            value={saving ? 'Saving...' : 'Save'}
            className="btn btn-primary"
            onClick={onSave}/>
    </form>
  );
};

OrderForm.propTypes = {
  order: PropTypes.object.isRequired,
  allMenuMeals: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default OrderForm;
