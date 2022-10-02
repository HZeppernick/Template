import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Nordmark } from './components/Nordmark';
import { Veranstaltungen } from './components/Veranstaltungen';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Nordmark />
      <Veranstaltungen />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
