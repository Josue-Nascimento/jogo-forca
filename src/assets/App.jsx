import { useState } from "react";
import "./app.css";
import palavras from "../palavras";

import img0 from "./img/forca0.png";
import img1 from "./img/forca1.png";
import img2 from "./img/forca2.png";
import img3 from "./img/forca3.png";
import img4 from "./img/forca4.png";
import img5 from "./img/forca5.png";
import img6 from "./img/forca6.png";

export default function App() {
  const [escolha, setEscolha] = useState(true);
  const [palavra, setPalavra] = useState([]);
  const [sortear, setSortear] = useState ([])
  

  function Alfa({ escolha, Letra }) {
    return (
      <div className="chefeAlfabeto">
        <div className="alfabetoInteiro">
          <button className="alfabeto" disabled={escolha}>
            {Letra}
          </button>
        </div>
      </div>
    );
  }

  function SortearPalavra(){
    const palavraSorteada = Math.floor(Math.random() * palavras.length);
    return palavras[palavraSorteada];
  }

  function Iniciar() {
    //const ind = Math.floor(Math.random() * palavras.length)
    const indice = [SortearPalavra()]
     setSortear(indice)
    const traco = []
    setEscolha(false);
    let p = indice[0].split("")
    for(let i = 0; indice[0].length > i; i++){
      traco.push("_")
    }
    setPalavra(traco)
  }


  const alfabeto = [
    { Letra: "A" },
    { Letra: "B" },
    { Letra: "C" },
    { Letra: "D" },
    { Letra: "E" },
    { Letra: "F" },
    { Letra: "G" },
    { Letra: "H" },
    { Letra: "I" },
    { Letra: "J" },
    { Letra: "K" },
    { Letra: "L" },
    { Letra: "M" },
    { Letra: "N" },
    { Letra: "O" },
    { Letra: "P" },
    { Letra: "Q" },
    { Letra: "R" },
    { Letra: "S" },
    { Letra: "T" },
    { Letra: "U" },
    { Letra: "V" },
    { Letra: "W" },
    { Letra: "X" },
    { Letra: "Y" },
    { Letra: "Z" },
  ];
  return (
    <>
      <div className="topoGeral">
        <div className="topo">
          <img className="forca" src={img0} alt="" />
          <div className="topoOne">
            <h1 onClick={() => Iniciar()} className="escolher">
              Escolher
            </h1>
            <div className="lista">
              {palavra.map((p) => (
                <p>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="chefeAlfabeto">
        <div className="separa">
          {alfabeto.map((s) => (
            <Alfa Letra={s.Letra} escolha={escolha} />
          ))}
        </div>
      </div>
      <div className="chute">
        <h1>Já sei a palavra!!</h1>
        <input disabled={escolha} type="text" name="" id="" />
        <button disabled={escolha}>Chutar</button>
      </div>
    </>
  );
}
