
import './App.css';
import './components/CartWidget';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <div>
      <NavBar className="NavBar"/>
      <header className="App-header">
        <ItemListContainer saludo="Bienvenidos a la Rockola, tu tienda del ROCK"/>
      </header>
    </div>
  );
}
export default App;