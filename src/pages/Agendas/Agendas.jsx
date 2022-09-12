import React, { useState } from 'react';
import { Button } from '../../components';
import { Header, Agenda } from '../../templates';
import { useNavigate } from 'react-router-dom';

export default function Agendas() {
  const dropDownOptions = [
    { value: 'agendas', label: 'Agendas' },
    { value: 'cursos', label: 'Cursos' },
    { value: 'eventos', label: 'Eventos' },
  ];

  const checkBoxOptions = [
    { value: 'google', label: 'Google Calendar' },
    { value: 'outlook', label: 'Outlook Calendar' },
    { value: 'notion', label: 'Notion' },
  ];

  const navigate = useNavigate();

  const [page, setPage] = useState('agendas');

  return (
    <div>
      <Header />
      <Agenda
        title="TIPOS DE AGENDAS"
        dropDownProps={{
          options: dropDownOptions,
          onChange: (e) => {
            setPage(e.target.value)
            navigate(`/${e.target.value}`);
          },
          value: {page},
        }}
        checkBoxProps={{
          options: checkBoxOptions,
          onChange: (e) => console.log(e.target.value),
        }}
      />
      <Button
        text="Seguir"
        onClick={() => console.log('Seguir')}
      />
    </div>
  );
}