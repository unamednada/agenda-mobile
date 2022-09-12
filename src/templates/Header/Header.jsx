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
            <a href="/"><img src="https://924234.smushcdn.com/2329743/wp-content/uploads/2022/05/netflix-distribui-nfts-da-serie-love-death-and-robots-saiba-como-ganhar.jpg?lossy=1&strip=1&webp=1" alt="perfil" />{nome}</a>
          </div>
         
          <nav>
            <ul class="container">
              <li class="item"><a>{curso}</a></li>
              <li class="item"><a>{modalidade}</a></li>
              <li class="item"><a>{email}</a></li>
              <li class="item"><a>{cidade}</a></li>
            </ul>
          </nav>
        </header>
      </div>
    </section>
  );
}
