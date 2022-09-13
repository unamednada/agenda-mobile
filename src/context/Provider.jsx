import React, { useState } from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const [logEmail, setLogEmail] = useState('');
  const [logPassword, setLogPassword] = useState('');
  const [studentLog, setStudentLog] = useState('');
  const [agendas, setAgendas] = useState([]);
  const [courses, setCourses] = useState([]);
  const [events, setEvents] = useState([]);

  const context = {
    logEmail,
    setLogEmail,
    logPassword,
    setLogPassword,
    studentLog,
    setStudentLog,
    agendas,
    setAgendas,
    courses,
    setCourses,
    events,
    setEvents,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}
