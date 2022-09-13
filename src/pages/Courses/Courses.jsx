import React, { useState } from 'react';
import { Button } from '../../components';
import { Header, Agenda } from '../../templates';
import { useNavigate } from 'react-router-dom';

export default function Courses() {
  const dropDownOptions = [
    { value: 'courses', label: 'Cursos' },
    { value: 'agendas', label: 'Agendas' },
    { value: 'events', label: 'Eventos' },
  ];

  const checkBoxOptions = [
    { value: 'projeto', label: 'Projeto Integrador' },
    { value: 'websta', label: 'Web Standard' },
    { value: 'algoritmos', label: 'Algorítmos' },
  ];

  const navigate = useNavigate();

  const [page, setPage] = useState('courses');

  return (
    <div>
      <Header />
      <Agenda
        title="SEUS CURSOS"
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