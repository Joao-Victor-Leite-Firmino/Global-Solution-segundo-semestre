'use client'

import React, { useState } from "react";
import { useRouter } from "next/router";
import Header from "../Components/header"; 
import Footer from "../Components/footer"
import styles from "./atendimento.module.css";

const ListarSintomas = () => {
  const [sintomas, setSintomas] = useState([]);
  const [intensidade, setIntensidade] = useState("leve");

  const handleSubmit = () => {
    const data = {
      sintomas,
      intensidade,
    };

    // Enviar os dados para o back-end
    fetch("/api/sintomas", {
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

      <h1>Listar sintomas</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="sintomas">Sintomas</label>
          <input
            type="text"
            class="form-control"
            id="sintomas"
            name="sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="intensidade">Intensidade</label>
          <select
            class="form-control"
            id="intensidade"
            name="intensidade"
            value={intensidade}
            onChange={(e) => setIntensidade(e.target.value)}
          >
            <option value="leve">Leve</option>
            <option value="moderada">Moderada</option>
            <option value="grave">Grave</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>

      <Footer />
    </div>
  );
};

export default ListarSintomas;




