'use client'

import styled from "styled-components";
import Link from "next/link";

const Button = styled.button`
  width: 100%;
  height: 200px;
  margin: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #000000;
  font-size: 24px;

  &:hover {
    background-color: #f5f5f5;
  }

  &:active {
    background-color: #e6e6e6;
  }

  .icon {
    width: 100px;
    height: 100px;
  }

  & > button {
    padding: 5px;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 200px;
  }


  @media (min-width: 768px) {
    width: 250px;
    height: 200px;
  }

  @media (min-width: 992px) {
    width: 500px;
    height: 150px;
  }
`;

const ImagemBotao = styled.img`
  width: 100px;
  height: 100px;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media (min-width: 992px) {
    width: 30px;
    height: 30px;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  & > button {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
  }
`;

const App = () => {
  const buttons = [
    { image: "medico.png", text: "Atendimento", href: "/Atendimento" },
    { image: "consulta-de-pesquisa.png", text: "Histórico médico", href: "/Historico" },
  ];

  return (
    <Buttons>
      {buttons.map((button, index) => (
        <Link href={button.href} key={index}>
          <Button>
            <ImagemBotao src={button.image} alt={button.text} className="icon" />
            <span className="text">{button.text}</span>
          </Button>
        </Link>
      ))}
    </Buttons>
  );
};

export default App;


