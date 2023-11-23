'use client'

import styled from "styled-components";
import Link from "next/link";

const Button = styled.button`
  width: 50%;
  height: 100px;
  margin: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 500;

  &:hover {
    background-color: #f5f5f5;
  }

  &:active {
    background-color: #e6e6e6;
  }

  .icon {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    width: 200px;
    margin: 0 10px;
  }
`;

const ImagemBotao = styled.img`
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  & > button {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const App = () => {
  const buttons = [
    { image: "medico.png", text: "Atendimento", href: "/Atendimento" },
    { image: "historia (1).png", text: "Consultas anteriores", href: "/consultas-anteriores" },
    { image: "consulta-de-pesquisa.png", text: "Histórico médico", href: "/historico-medico" },
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

