import React from 'react';

export default function Button({ text, onClick, disabled }) {
  return (
    <button className={text+'Button'} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}
