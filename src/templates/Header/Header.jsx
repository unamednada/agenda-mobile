import React, { useContext } from 'react';
import Context from '../../context/Context';
import './Header.css'
export default function Header() {
  const { studentLog } = useContext(Context);
  const { nome, email, cidade, modalidade, curso } = studentLog;

  return (
    <section class="hero">
      <div class="main">
        <header>
          <div class="logo">
            <h1><img src="https://924234.smushcdn.com/2329743/wp-content/uploads/2022/05/netflix-distribui-nfts-da-serie-love-death-and-robots-saiba-como-ganhar.jpg?lossy=1&strip=1&webp=1" alt="perfil" />{nome}</h1>

          </div>

          <nav>
            <ul class="container">
              <li class="item"><h3>{curso}</h3></li>
              <li class="item"><h2>{modalidade}</h2></li>
              <li class="item"><h2>{email}</h2></li>
              <li class="item"><h2>{cidade}</h2></li>
            </ul>
          </nav>
        </header>
      </div>
    </section>
  );
}
