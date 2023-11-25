// pages/index.js
'use client'

// pages/index.js

import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../Components/header';
import Footer from '../Components/footer';
import styles from './pulseira.module.css'

const IndexPage = () => {
  const [data, setData] = useState(null);
  const [color, setColor] = useState('');

  // Fetch data from the backend
  const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    setData(data);
  };

  // Fetch data on initial render
  useEffect(() => {
    fetchData();
  }, []);

  // Set color
  useEffect(() => {
    if (data && data.length > 0) {
      setColor(data[0].color);
    }
  }, [data]);

  return (
    <>
      <Header />
      <div className={styles.div}>
        <h1>A sua pulseira é:</h1>
        {data ? (
          <ul className={styles.pulseira}>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>Carregando dados...</p>
        )}
        <div/>
      </div>
      <Footer />
    </>
  );
};

export default IndexPage;

