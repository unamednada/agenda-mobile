import React from 'react';
export default function CheckBox({ onChange, options }) {
  return (
    <div>
      {
        options.map((option) => (
          <label htmlFor={option.value}>
            <input type="checkbox" id={option.value} name={option.value} value={option.value} onChange={onChange} />
            {option.label}
          </label>
        ))
      }
    </div>
  );
}
