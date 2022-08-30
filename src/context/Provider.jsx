import React, { useState } from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const [logEmail, setLogEmail] = useState('');
  const [logPassword, setLogPassword] = useState('');
  const [studentLog, setStudentLog] = useState('');

  const context = {
    logEmail,
    setLogEmail,
    logPassword,
    setLogPassword,
    studentLog,
    setStudentLog,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}
