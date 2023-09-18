import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Button from './components/Button';
import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
    <div className='FirstContent'>
    <Navbar className="NavBar"/>
      <Text className='Text'/>
      <Button className="Button" />
    </div>
      <Cards />
    </div>
  );
}

export default App;