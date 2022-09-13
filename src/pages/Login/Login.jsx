import React, { useState, useContext } from 'react';
import { Button, TextInput } from '../../components';
import Context from '../../context/Context';
import Verify from '../../utils/Verify';
import { useNavigate } from 'react-router-dom';

import api from '../../services/api'
import { login } from '../../services/auth'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    setLogEmail,
    setLogPassword
  } = useContext(Context);
  const navigate = useNavigate();



  // function loginUser(e) {
  //   e.preventDefault();
  //   setLogEmail(email);
  //   setLogPassword(password);
  //   navigate('/courses');
  // }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await api.post("/sessions", { email, password })
      console.log(response.data.token)
      login(response.data.token);
      navigate('/courses');
    } catch (err) {
      console.log(err)
    }
    setLogEmail(email);
    setLogPassword(password);
    navigate('/agendas');
  }

  return (
    <div>
      <div>
        <h1>Bem-vindo de volta!!</h1>
      </div>
      <form>
        <p>Acesse sua conta agora mesmo</p>
        <TextInput
          placeholder="Email:"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextInput
          placeholder="senha:"
          value={password}
          onChange={e => setPassword(e.target.value)}
          password
        />
        <Button text="Entrar" onClick={(e) => handleSubmit(e)} />
        <a href="/register">registrar-se</a>
      </form>
    </div>
  )
};