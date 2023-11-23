'use client'
import Header from "./header"; 
import styles from "./home.module.css";
import Link from "next/link";
import ImageComponent from "../Components/imagem";

const App = () => {
    const menu = [
      { text: "Perfis", href: "/atendimentos" },
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
            <h1>Como podemos te ajudar?</h1>
        </div>
        </>
    );
  };
  
  export default App;
  