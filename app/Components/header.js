'use client'

import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Header = styled.header`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #006094;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

const Logo = styled.img`
  width: 300px;
  height: 100px;
  margin: 20px 0 20px 20px;

  @media (max-width: 768px) {
    width: 150px;
    height: 50px;
    margin: 10px 0 10px 0;
  }
`;

const Conexao = styled.a`
  color: #000000;
  font-size: 30px;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Lista = styled.ul`
  display: flex;
  list-style-type: none;

  @media (max-width: 768px) {
    display: flex-wrap;
    justify-content: center;
    margin-top: 20px;
  }
`;

const Opcao = styled.li`
  padding: 0 10px;

  @media (max-width: 768px) {
    padding: 0 5px;
    margin-bottom: 10px;
  }
`;

const header = () => {
  const menu = [
    { text: "Perfis", href: "/atendimentos" },
  ];

  return (
    <div>
      <Header>
        <Link href="/Home">
          <Logo src="notredame-logo.png" alt="Logo" />
        </Link>
        <nav>
          <Lista>
            {menu.map((item, index) => (
              <Opcao key={index}>
                <Conexao href={item.href}>{item.text}</Conexao>
              </Opcao>
            ))}
          </Lista>
        </nav>
      </Header>
    </div>
  );
};

export default header;

