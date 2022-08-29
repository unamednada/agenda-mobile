import React from 'react';
import { Button, TextInput } from '../../components';

export default function Login() {
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
            value=""
            onChange={() => {}}
          />
          <TextInput
            placeholder="senha:"
            value=""
            onChange={() => {}}
            password
          />
          <Button text="Entrar" onClick={() => {}} disabled />
          <a href=".">registrar-se</a>
        </div>
      </form>
    </div>
  )
};