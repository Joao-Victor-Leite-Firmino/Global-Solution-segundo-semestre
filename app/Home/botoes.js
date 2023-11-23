import styled from "styled-components";

const Button = styled.button`
  width: 25%;
  height: 100px;
  margin: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: #f5f5f5;
  }

  &:active {
    background-color: #e6e6e6;
  }

  .icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  .text {
    font-size: 24px;
    font-weight: 500;
  }
`;

const ImagemBotao = styled.img`
    width=200px;
    height=50%;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > button {
    margin-bottom: 10px;
  }
`;

const App = () => {
  const buttons = [
    { image: "medico.png", text: "Triagem" },
    { image: "historia (1).png", text: "Atendimento" },
    { image: "consulta-de-pesquisa.png", text: "Histórico médico" },
  ];

  return (
    <Buttons>
      {buttons.map((button, index) => (
        <Button key={index}>
          <ImagemBotao src={button.image} alt={button.text} className="icon" />
          <span className="text">{button.text}</span>
        </Button>
      ))}
    </Buttons>
  );
};

export default App;
