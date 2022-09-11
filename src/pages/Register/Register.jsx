import React, { useState, useContext } from 'react';
import { Button, TextInput } from '../../components';
import Context from '../../context/Context';
import './Register.css'
import { useNavigate } from 'react-router-dom';

import api from "../../services/api"


export default function Register() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [cidade, setCidade] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [polo, setPolo] = useState('');
  const [modalidade, setModalidade] = useState('');
  const [area, setArea] = useState('');
  const [curso, setCurso] = useState('');

  const { setStudentLog } = useContext(Context);

  const navigate = useNavigate();

  function register(e) {
    e.preventDefault();
    setStudentLog({
      username,
      email,
      password,
      cpf,
      cidade,
      endereco,
      cep,
      polo,
      modalidade,
      area,
      curso,
    });
    navigate('/courses');
  }

  const handlerSubmit = async e => {
    e.preventDefault();
    if (!username || !password || !email) {
      console.log("precisa colocar o minimo necessario")
      return
    }


    try {
      const response = await api.post("/users", {
        username,
        email,
        password,
        cpf,
        cidade,
        endereco,
        cep,
        polo,
        modalidade,
        area,
        curso
      })
      console.log(response.data)

      navigate('/courses');
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <div>
        <h1>Cadastro do aluno</h1>
      </div>
      <form>
        <p>Preencher todos os campos abaixo:</p>
        <TextInput
          placeholder="Nome:"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextInput
          placeholder="Email:"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          placeholder="Confirmar email:"
        />
        <p>senha:</p>
        <TextInput
          placeholder="senha:"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          password
        />
        <TextInput
          placeholder="Confirmar senha:"
          password
        />
        <p>Seus dados:</p>
        <TextInput
          placeholder="CPF:"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <TextInput
          placeholder="Cidade:"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
        <TextInput
          placeholder="Endereço:"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
        <TextInput
          placeholder="CEP:"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <p>Curso:</p>
        <TextInput
          placeholder="Unidade Polo:"
          value={polo}
          onChange={(e) => setPolo(e.target.value)}
        />
        <TextInput
          placeholder="Modalidade:"
          value={modalidade}
          onChange={(e) => setModalidade(e.target.value)}
        />
        <TextInput
          placeholder="Área:"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
        <TextInput
          placeholder="Curso:"
          value={curso}
          onChange={(e) => setCurso(e.target.value)}
        />
        <Button text="Cadastrar" onClick={(e) => handlerSubmit(e)} />
        <a href="/">ou login</a>
      </form>
    </div>
  );
}