import React, { useState, useContext } from 'react';
import { Button, TextInput } from '../../components';
import Context from '../../context/Context';
import Verify from '../../utils/Verify';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    setLogEmail,
    setLogPassword
  } = useContext(Context);

  function login(e) {
    e.preventDefault();
    setLogEmail(email);
    setLogPassword(password);
  }

  return (
    <div>
      <div>
        <h1>Bem-vindo de volta!!</h1>
      </div>
      <form>
        <div>
          <p>Acesse sua conta agora mesmo</p>
          <TextInput
            placeholder="Email:"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            placeholder="senha:"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            password
          />
          <Button text="Entrar" onClick={(e) => login(e)} disabled={ !(Verify.isEmail(email) && Verify.isPassword(password)) } />
          <a href="/register">registrar-se</a>
        </div>
      </form>
    </div>
  )
};