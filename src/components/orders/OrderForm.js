import React from 'react';
import TextInput from '../common/textInput';
import NumberInput from '../common/numberInput';
import SelectInput from '../common/selectInput';

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
//   order: React.PropTypes.object.isRequired,
//   onSave: React.PropTypes.func.isRequired,
//   onChange: React.PropTypes.func.isRequired,
//   saving: React.PropTypes.bool,
//   errors: React.PropTypes.object
};

export default OrderForm;
