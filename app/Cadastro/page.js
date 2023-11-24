'use client'

import { useState } from "react";
import styles from "./cadastro.module.css";
import Link from "next/link";

const CadastroPage = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [sexo, setSexo] = useState("");
  const [endereco, setEndereco] = useState("");
  const [idade, setIdade] = useState("");

  const handleCadastro = async (e) => {
    e.preventDefault();

    const data = {
      nome,
      cpf,
      senha,
      sexo,
      endereco,
      idade,
    };

    try {
      const response = await fetch("http://localhost:8050/api/pacientes/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        // Handle successful login here
      } else {
        alert(responseData.message);
      }
    } catch (error) {
      console.error(error);
      alert("Falha na conexão com o servidor. Tente novamente.");
    }
  };

  return (
    <div className={styles.container}>
      <div className="div">
        <img className="logo" src="notredame-logo.png" alt="Logo NotreDame" />
        <h1 className="titulo">Cadastro</h1>
        <form className={styles.form} onSubmit={handleCadastro}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <br /><br />
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
          <label htmlFor="sexo">Sexo:</label>
          <select id="sexo" name="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)}>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
          <br /><br />
          <label htmlFor="endereco">Endereço:</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
          <br /><br />
          <label htmlFor="idade">Idade:</label>
          <input
            type="number"
            id="idade"
            name="idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
          <br /><br />
          <Link href="/">
            <input type="submit" value="Cadastrar" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CadastroPage;