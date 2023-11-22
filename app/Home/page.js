'use client'
import Header from "./header"; 

const App = () => {
    const menu = [
      { text: "Atendimentos", href: "/atendimentos" },
      { text: "Histórico médico", href: "/historico-medico" },
    ];
  
    return (
      <div>
        <Header>
          <a href="/">
            <img src="notredame-logo.png" alt="Logo NotreDame" />
          </a>
          <nav>
            <ul>
              {menu.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.text}</a>
                </li>
              ))}
            </ul>
          </nav>
        </Header>
      </div>
    );
  };
  
  export default App;
  