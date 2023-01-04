import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Container from './Components/Container/Container';
import Sahpe from './Components/Sahpe/Sahpe';
import Shape from './Components/Shape/Shape';
import Paragarph from './Components/Paragarph/Paragarph';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container/>
      <Sahpe/>
      <Shape/>
      <Paragarph/>
      <Footer/>
    </div>
  );
}

export default App;
