import React, { useContext } from 'react';
import Context from '../../context/Context';
import './Header.css'
export default function Header() {
  const { studentLog } = useContext(Context);
  const { nome, email, cidade, modalidade, curso } = studentLog;

  return (
    <section className="hero">
      <div className="main">
        <header>
          <div className="logo">
            <a href="/"><img src="https://924234.smushcdn.com/2329743/wp-content/uploads/2022/05/netflix-distribui-nfts-da-serie-love-death-and-robots-saiba-como-ganhar.jpg?lossy=1&strip=1&webp=1" alt="perfil" />{nome}</a>
          </div>
         
          <nav>
            <ul className="container">
              <li className="item">{curso}</li>
              <li className="item">{modalidade}</li>
              <li className="item">{email}</li>
              <li className="item">{cidade}</li>
            </ul>
          </nav>
        </header>
      </div>
    </section>
  );
}
