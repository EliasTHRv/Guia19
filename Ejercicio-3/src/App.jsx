import "./App.css";

function App() {
  return (
  <div className="flex">
    <Componente nombre="Elias" />
    <Componente2 nombre2="Vicky♥" />
    <Componente3 union="♥"/>
  </div>
  );
}

function Componente(props) {
  return <p>Mi nombre es: {props.nombre}</p>;
}

function Componente2(props) {
  return <p>Mi nombre es: {props.nombre2}</p>;
}


function Componente3(props) {
  return <p> Front & Back {props.union} </p>;
}
export default App;

