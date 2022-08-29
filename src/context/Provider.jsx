import React, { useState } from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const [logEmail, setLogEmail] = useState('');
  const [logPassword, setLogPassword] = useState('');

  const context = {
    logEmail,
    setLogEmail,
    logPassword,
    setLogPassword,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}
