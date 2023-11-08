import img from "./img/forca0.png";
import "./App.css";

function Alfa(props) {
  return (
    <div className="alfabetoInteiro">
      <div className="alfabeto">
        <h2>{props.Letra}</h2>
      </div>
    </div>
  );
}

export default function App() {
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
      <div className="topo">
        <img className="forca" src={img} alt="" />
        <div>
        <h1 className="escolher">Escolher palavra</h1>
        
        </div>
      </div>

    <div className="separa">
          {alfabeto.map((s) => (
            <Alfa Letra={s.Letra} />
          ))}
    </div>
    </>
  );
}
