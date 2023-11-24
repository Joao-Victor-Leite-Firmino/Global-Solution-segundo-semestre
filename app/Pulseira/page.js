// pages/index.js
'use client'

import { useState } from "react";

const IndexPage = () => {
  const [data, setData] = useState(null);

  // Chama a API do back-end
  const fetchData = async () => {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    setData(data);
  };

  // Chama a função fetchData ao inicializar a página
  useEffect(() => {
    fetchData();
  }, []);

  // Exibe os dados na tela
  if (data) {
    return (
      <div>
        <h1>Os dados recebidos são:</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Os dados ainda não foram recebidos.</h1>
      </div>
    );
  }
};
