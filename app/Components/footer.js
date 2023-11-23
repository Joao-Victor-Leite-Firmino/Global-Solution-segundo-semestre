import styled from "styled-components";

const Footer = styled.footer`
  background-color: #d1d1d1;;
  padding: 20px;
  color: #000000;
  text-align: center;
  font-family: 'Arial', sans-serif;
  margin-top: 40px;

  & > a {
    color: #000;
    text-decoration: none;
  }
`;

const App = () => {
  return (
    <div>
      <Footer>
        <h2>
          New Health, 2023
        </h2>
        <p>
        RM 99618 - Gustavo dos Santos Correa
        </p>
        <p>
        RM 97714 - João Victor Leite Firmino
        </p>
        <p>
        RM 98660 - Leonardo Valentim de Souza
        </p>
        <p>
        RM 551201 - Lucas Cazzaro
        </p>
        <p>
        RM 99219 - Ronaldo Riyudi Noda
        </p>
      </Footer>
    </div>
  );
};

export default App;