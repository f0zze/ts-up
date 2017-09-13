import * as React from 'react';

const Select = ({ value, onValueChange, options }) => {
    const handleValueChange = event => {
        onValueChange(event.target.value);
    };

    return (
        <select value={value} onChange={handleValueChange}>
            {options.map(color =>
                <option key={color} value={color}>
                    {color}
                </option>
            )}
        </select>
    );
};

export default Select;
