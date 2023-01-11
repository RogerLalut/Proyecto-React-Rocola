
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/CartWidgets/CartWidget';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer'


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