import React, { useState } from 'react';
import { Button, TextInput } from '../../components';
import Verify from '../../utils/Verify';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          <Button text="Entrar" onClick={() => {}} disabled={ !(Verify.isEmail(email) && Verify.isPassword(password)) } />
          <a href="/register">registrar-se</a>
        </div>
      </form>
    </div>
  )
};