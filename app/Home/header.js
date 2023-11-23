'use client'

import React from "react";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 150px;
  background-color: #d1d1d1;
  border-Bottom: 1px solid #006094;
  display: flex;
  align-items: center;
  `

const Logo = styled.img`
    width: 300px;
    height: 100px;
    margin: 20px 0 20px 20px;
`

const Link = styled.a`
    color: #000000;
    font-Size: 30px;
    text-Decoration: none;
    font-family: Arial, Helvetica, sans-serif;
`

const Lista = styled.ul`
    display: flex;
    list-style-type: none;
`

const Opcao = styled.li`
    padding: 0 30px;
`

const header = () => {
  const menu = [
    { text: "Perfis", href: "/atendimentos" },
  ];

  return (
    <div>
      <Header>
        <a href="/">
          <Logo src="notredame-logo.png" alt="Logo" />
        </a>
        <nav>
          <Lista>
            {menu.map((item, index) => (
              <Opcao key={index}>
                <Link href={item.href}>{item.text}</Link>
              </Opcao>
            ))}
          </Lista>
        </nav>
      </Header>
    </div>
  );
};

export default header;