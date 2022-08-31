import React, { useContext } from 'react';
import Context from '../../context/Context';

export default function Header() {
  const { studentLog } = useContext(Context);
  const { nome, email, cidade, modalidade, curso } = studentLog;

  return (
    <div>
      <div>
        <img src="logo.svg" alt="profile_pic" />
        <h1>{nome}</h1>
        <h3>{curso}l</h3>
      </div>
      <div>
        <h2>{cidade}</h2>
        <h2>{modalidade}</h2>
        <h2>{email}</h2>
      </div>
    </div>
  );
}
