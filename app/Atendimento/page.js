'use client'

import React, { useState } from "react";
import { useRouter } from "next/router";
import Header from "../Components/header"; 
import Footer from "../Components/footer"
import styles from "./atendimento.module.css";
import Link from "next/link";

const ListarSintomas = () => {
  const [sintomas, setSintomas] = useState([]);
  const [intensidade, setIntensidade] = useState("leve");

  const handleSubmit = () => {
    const data = {
      sintomas,
      intensidade,
    };

    // Enviar os dados para o back-end
    fetch("http://localhost:8050/triagem/realizar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Header />

      <h1 className={styles.h1}>Atendimento</h1>

      <form className={styles.formbody} onSubmit={handleSubmit}>
        <div className={styles.div}>
          <label htmlFor="sintomas">Sintomas</label>
          <select id="sintomas" name="sintomas" value={sintomas} onChange={(e) => setSintomas(e.target.value)}>
            <option value="">Selecione um sintoma</option>
            <option value="DOR_DE_CABECA">Dor de cabeça</option>
            <option value="FEBRE">Febre</option>
            <option value="PRESSAO_ALTA">Pressão alta</option>
            <option value="NAUSEAS">Náuseas</option>
            <option value="TOSSE">Tosse</option>
            <option value="FADIGA">Fadiga</option>
            <option value="DOR_ABDOMINAL">Dor abdominal</option>
            <option value="DOR_ARTICULACOES">Dor nas articulações</option>
            <option value="DIFICULDADE_RESPIRATORIA">Dificuldade respiratória</option>
            <option value="INSONIA">Insônia</option>
          </select>
        </div>
        <div className={styles.form}>
          <label for="intensidade">Intensidade</label>
          <select id="intensidade" name="intensidade" value={intensidade} onChange={(e) => setIntensidade(e.target.value)}>
            <option value="">Selecione a intensidade</option>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </div>
        <div className={styles.button}> 
        <Link href="/Pulseira">
        <button className={styles.b} type="submit" class="btn btn-primary">Enviar</button>
        </Link>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default ListarSintomas;