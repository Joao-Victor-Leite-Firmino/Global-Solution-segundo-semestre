// pages/patient.js
'use client'

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Header from '../Components/header';
import Footer from '../Components/footer';
import { useEffect } from 'react'
import styles from "./historico.module.css";

const ListarDados = () => {
  const [cpf, setCpf] = useState("");
  const [dados, setDados] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      cpf,
    };

    try {
      const response = await fetch("/api/listar-dados", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      if (response.ok) {
        setDados(responseData);
      } else {
        alert(responseData.message);
      }
    } catch (error) {
      console.error(error);
      alert("Falha na conexão com o servidor. Tente novamente.");
    }
  };

  return (
    <>
    <Header />
    <div className={styles.container}>
          <div>
              <h1>Listar dados</h1>
              <form className={styles.form} onSubmit={handleSubmit}>
                  <label htmlFor="cpf">CPF:</label>
                  <input
                      type="text"
                      id="cpf"
                      name="cpf"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)} />
                  <br /><br />
                  <button className={styles.b} type="submit" class="btn btn-primary">Enviar</button>
              </form>
          </div>

          {dados && (
              <div>
                  <h2>Dados</h2>
                  <ul>
                      {dados.map((dado) => (
                          <li key={dado.id}>
                              <strong>Nome:</strong> {dado.nome}
                              <br />
                              <strong>Medicação:</strong> {dado.medicacao}
                              <br />
                              <strong>Alergia:</strong> {dado.alergia}
                              <br />
                              <strong>Doença:</strong> {dado.doenca}
                          </li>
                      ))}
                  </ul>
              </div>
          )}
      </div>
      <Footer />
      </>
  );
};

export default ListarDados;
