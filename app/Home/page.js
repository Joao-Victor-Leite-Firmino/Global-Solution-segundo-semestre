'use client'
import Header from "../Components/header"; 
import styles from "./home.module.css";
import Link from "next/link";
import ImageComponent from "../Components/imagem";
import Buttons from "./botoes";
import Footer from "../Components/footer"

const App = () => {
    const menu = [
      { text: "Perfis", href: "/atendimentos" },
    ];
    const buttons = [
        { image: "consulta-de-pesquisa.png", text: "Triagem" },
        { image: "medico.png", text: "Atendimento" },
        { image: "historia (1).png", text: "Histórico médico" },
      ];
  


    return (
      <><div>
            <Header>
                <link href="/">
                    <ImageComponent src="notredame-logo.png" alt="Logo NotreDame" width="50%" height="50%" />
                </link>
            </Header>
        </div>
        <div className={styles.div}>
            <ImageComponent src="medicos.jpg" alt="Médicos" width="50%" height="50%" />
            <h1 className={styles.h1}>Como podemos te ajudar?</h1>
            <div>
            <Buttons buttons={buttons} />
            </div>
            <Footer className={styles.footer}></Footer>
        </div>
        </>
    );
  };
  
  export default App;
  