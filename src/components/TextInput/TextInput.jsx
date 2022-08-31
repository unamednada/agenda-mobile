import React from 'react';
export default function TextInput({
  placeholder,
  value,
  onChange,
  password
}) {
  return (
    <input type={password ? 'password' : 'text'} placeholder={placeholder} value={value} onChange={onChange} />
  );
}