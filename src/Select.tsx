import * as React from 'react';

const Select = ({ value, onValueChange, options }) =>
    <select value={value} onChange={event => onValueChange(event.target.value)}>
        {options.map(color =>
            <option key={color} value={color}>
                {color}
            </option>
        )}
    </select>;

export default Select;
