import React from 'react';
import { Button, TextInput } from '../../components';

export default function Register() {
  return (
    <div>
      <div>
        <h1>Cadastro do aluno</h1>
      </div>
      <form>
        <p>Preencher todos os campos abaixo:</p>
        <TextInput placeholder="Nome:" />
        <TextInput placeholder="Email:" />
        <TextInput placeholder="Confirmar email:" />
        <p>senha:</p>
        <TextInput placeholder="senha:" password />
        <TextInput placeholder="Confirmar senha:" password />
        <p>Seus dados:</p>
        <TextInput placeholder="CPF:" />
        <TextInput placeholder="Cidade:" />
        <TextInput placeholder="Endereço:" />
        <TextInput placeholder="CEP:" />
        <p>Curso:</p>
        <TextInput placeholder="Unidade Polo:" />
        <TextInput placeholder="Modalidade:" />
        <TextInput placeholder="Área:" />
        <TextInput placeholder="Curso:" />
        <Button text="Cadastrar" />
        <a href="/">ou login</a>
      </form>
    </div>
  );
}