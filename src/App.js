import './App.css';
import OutraLista from './components/OutraLista';

function App() {

  const minhaLista = ['React','Vue','Angular'];

  return (
    <div className="App">
      <h1>Renderização de listas</h1>
      <OutraLista itens={minhaLista} />
      <OutraLista itens={[]} />
    </div>
  );
}

export default App;
