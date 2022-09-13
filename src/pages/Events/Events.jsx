import React, { useState } from 'react';
import { Button } from '../../components';
import { Header, Agenda } from '../../templates';
import { useNavigate } from 'react-router-dom';

export default function Events() {
  const dropDownOptions = [
    { value: 'events', label: 'Eventos' },
    { value: 'courses', label: 'Cursos' },
    { value: 'agendas', label: 'Agendas' },
  ];

  const checkBoxOptions = [
    { value: 'entrega_projeto', label: 'Entrega do Projeto Integrador' },
    { value: 'provas', label: 'Provas Presenciais' },
    { value: 'entrega_pti', label: 'Entrega das PTIs' },
  ];

  const navigate = useNavigate();

  const [page, setPage] = useState('events');

  return (
    <div>
      <Header />
      <Agenda
        title="PRAZOS E EVENTOS"
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