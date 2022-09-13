import React, { useState, useContext } from 'react';
import { Button } from '../../components';
import { Header, Agenda } from '../../templates';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/Context';

export default function Agendas() {
  const dropDownOptions = [
    { value: 'agendas', label: 'Agendas' },
    { value: 'courses', label: 'Cursos' },
    { value: 'events', label: 'Eventos' },
  ];

  const checkBoxOptions = [
    { value: 'google', label: 'Google Calendar' },
    { value: 'outlook', label: 'Outlook Calendar' },
    { value: 'notion', label: 'Notion' },
  ];

  const navigate = useNavigate();

  const [page, setPage] = useState('agendas');
  const {
    setAgendas,
  } = useContext(Context);

  const [selectedAgendas, setSelectedAgendas] = useState([]);

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
          onChange: (e) => {
            const { value } = e.target;
            if (selectedAgendas.includes(value)) {
              setSelectedAgendas(selectedAgendas.filter((agenda) => agenda !== value));
            } else {
              setSelectedAgendas([...selectedAgendas, value]);
            }
          },
        }}
      />
      <Button
        text="Usar Estas Agendas"
        onClick={() => {
          window.alert('Agendas selecionadas com sucesso!');
          setAgendas(selectedAgendas);
        }}
      />
    </div>
  );
}