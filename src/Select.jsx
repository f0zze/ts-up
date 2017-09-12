import React from 'react';

const Select = ({ value, onValueChange, options }) =>
    <select value={value} onChange={event => onValueChange(event.target.value)}>
        {options.map(color =>
            <option key={color} value={color}>
                {color}
            </option>
        )}
    </select>;

Select.propTypes = {
    value: React.PropTypes.string.isRequired,
    onValueChange: React.PropTypes.func.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};

export default Select;
