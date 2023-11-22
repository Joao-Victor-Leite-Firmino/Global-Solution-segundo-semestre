'use client'
import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      username,
      password,
    };

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      if (response.ok) {
        alert('Login bem sucedido!');
        // Handle successful login here
      } else {
        alert(responseData.message);
      }
    } catch (error) {
      console.error(error);
      alert('Falha na conexão com o servidor. Tente novamente.');
    }
  };

  return (
    <div className={styles.container}>
      <div>
      <img src="notredame-logo.png" alt="Logo NotreDame" />
      <h1>Login</h1>
      <form className={styles.form} onSubmit={handleLogin}>
        <label htmlFor="username">CPF:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /><br />
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <Link href="/Home">
          <input type="submit" value="Login" />
        </Link>
      </form>
      <Link href="/Cadastro">
        <p>Ainda não tem cadastro? Cadastre-se aqui</p>
      </Link>
    </div>
    </div>
  );
};

export default LoginPage;
