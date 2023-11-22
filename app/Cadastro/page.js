'use client'

import { useState } from "react";
import styles from "./cadastro.module.css";
import Link from "next/link";

const CadastroPage = () => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = async (e) => {
    e.preventDefault();

    const data = {
      cpf,
      senha,
    };

    try {
      const response = await fetch("/api/cadastro", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
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
      <img className="logo" src="notredame-logo.png" alt="Logo NotreDame" />
      <h1 className="titulo">Cadastro</h1>
      <form className={styles.form} onSubmit={handleCadastro}>
        <label htmlFor="cpf">CPF:</label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <br /><br />
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          name="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <br /><br />
        <Link href="/Login">
          <input type="submit" value="Cadastrar" />
        </Link>
      </form>
    </div>
  );
};

export default CadastroPage;
