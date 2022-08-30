import React, { useState } from 'react';
import { Button, TextInput } from '../../components';

export default function Register() {
  const [student, setStudent] = useState('');

  const studentObj = {
    name: '',
    email: '',
    password: '',
    cpf: '',
    city: '',
    address: '',
    cep: '',
    campus: '',
    mode: '',
    area: '',
    course: '',
  };

  return (
    <div>
      <div>
        <h1>Cadastro do aluno</h1>
      </div>
      <form>
        <p>Preencher todos os campos abaixo:</p>
        <TextInput
          placeholder="Nome:"
          value={studentObj.name}
          onChange={(e) => setStudent({ ...studentObj, name: e.target.value })}
        />
        <TextInput
          placeholder="Email:"
          value={studentObj.email}
          onChange={(e) => setStudent({ ...studentObj, email: e.target.value })}
        />
        <TextInput
          placeholder="Confirmar email:"
        />
        <p>senha:</p>
        <TextInput
          placeholder="senha:"
          value={studentObj.password}
          onChange={(e) => setStudent({ ...studentObj, password: e.target.value })}
          password
        />
        <TextInput
          placeholder="Confirmar senha:"
          password
        />
        <p>Seus dados:</p>
        <TextInput
          placeholder="CPF:"
          value={studentObj.cpf}
          onChange={(e) => setStudent({ ...studentObj, cpf: e.target.value })}
        />
        <TextInput
          placeholder="Cidade:"
          value={studentObj.city}
          onChange={(e) => setStudent({ ...studentObj, city: e.target.value })}
        />
        <TextInput
          placeholder="Endereço:"
          value={studentObj.address}
          onChange={(e) => setStudent({ ...studentObj, address: e.target.value })}
        />
        <TextInput
          placeholder="CEP:"
          value={studentObj.cep}
          onChange={(e) => setStudent({ ...studentObj, cep: e.target.value })}
        />
        <p>Curso:</p>
        <TextInput
          placeholder="Unidade Polo:"
          value={studentObj.campus}
          onChange={(e) => setStudent({ ...studentObj, campus: e.target.value })}
        />
        <TextInput
          placeholder="Modalidade:"
          value={studentObj.mode}
          onChange={(e) => setStudent({ ...studentObj, mode: e.target.value })}
        />
        <TextInput
          placeholder="Área:"
          value={studentObj.area}
          onChange={(e) => setStudent({ ...studentObj, area: e.target.value })}
        />
        <TextInput
          placeholder="Curso:"
          value={studentObj.course}
          onChange={(e) => setStudent({ ...studentObj, course: e.target.value })}
        />
        <Button text="Cadastrar" />
        <a href="/">ou login</a>
      </form>
    </div>
  );
}