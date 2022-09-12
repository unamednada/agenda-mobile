import React from 'react';
import { Button } from '../../components';
import { Header, Agenda } from '../../templates'

export default function Agendas() {
  const dropDownOptions = [
    { value: 'cursos', label: 'Cursos' },
    { value: 'eventos', label: 'Eventos' },
    { value: 'agendas', label: 'Agendas' },
  ];

  const checkBoxOptions = [
    { value: 'google', label: 'Google Calendar' },
    { value: 'outlook', label: 'Outlook Calendar' },
    { value: 'notion', label: 'Notion' },
  ];

  return (
    <div>
      <Header />
      <Agenda
        title="TIPOS DE AGENDAS"
        dropDownProps={{
          options: dropDownOptions,
          onChange: (e) => console.log(e.target.value),
          value: 'agendas',
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