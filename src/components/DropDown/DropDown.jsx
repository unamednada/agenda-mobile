import React from 'react';

export default function DropDown({ options, onChange, value }) {
  return (
    <select onChange={ onChange } value={ value }>
      {options.map((option) => (
        <option key={ option.value } value={ option.value }>{option.label}</option>
      ))}
    </select>
  );
}
