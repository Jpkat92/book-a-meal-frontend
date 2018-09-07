import React from 'react';
import TextInput from '../common/forms/textInput';
import NumberInput from '../common/forms/numberInput';

const MealForm = ({meal, onSave, onChange, saving, errors}) => {
  return (
    <form>
        <h1>Manage meal</h1>
        <TextInput
            name="name"
            label="Name"
            value={meal.name}
            onChange={onChange}
            error={errors.className}/>

        <NumberInput
            name="price"
            label="Price in $"
            value={meal.price}
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

MealForm.propTypes = {
//   meal: React.PropTypes.object.isRequired,
//   onSave: React.PropTypes.func.isRequired,
//   onChange: React.PropTypes.func.isRequired,
//   saving: React.PropTypes.bool,
//   errors: React.PropTypes.object
};

export default MealForm;
