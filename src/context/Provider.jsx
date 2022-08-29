import React, { useState } from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const context = {
    email,
    setEmail,
    password,
    setPassword,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}
