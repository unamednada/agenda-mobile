import React, { useState, useContext } from 'react';
import { Button } from '../../components';
import { Header, Agenda } from '../../templates';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/Context';

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
  const {
    setCourses,
  } = useContext(Context);

  const [selectedCourses, setSelectedCourses] = useState([]);

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
          onChange: (e) => {
            const { value } = e.target;
            if (selectedCourses.includes(value)) {
              setSelectedCourses(selectedCourses.filter((agenda) => agenda !== value));
            } else {
              setSelectedCourses([...selectedCourses, value]);
            }
          },
        }}
      />
      <Button
        text="Seguir"
        onClick={() => {
          window.alert('Você receberá os lembretes destes cursos!');
          setCourses(selectedCourses);
        }}
      />
    </div>
  );
}