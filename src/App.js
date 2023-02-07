import './App.css';
import Frase from './components/Frase';
import Pessoa from './components/Pessoa';

function App() {
  const nome = "Dedé".toLocaleUpperCase()
  function soma(a,b) {
    return a+b
  }
  return (
    <div className="App">
      <h2>Olá, {nome}</h2>
      <p>Eita, rapaziada, 2 + 2 é {soma(2,2)}</p>
      <Pessoa imagem="https://placeholder.com/150" nome="André" idade="18" />
      <Frase frase = "Componente de frase!" />
    </div>
  );
}

export default App;
