import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Nordmark } from './components/Nordmark';
import { Veranstaltungen } from './components/Veranstaltungen';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Popup from './components/Popup';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Nordmark />
      <Veranstaltungen />
      <Contact />
      <Footer />
      <button onClick={() => setButtonPopup(true)}>DSGVO</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <p>DSGVO</p>
      </Popup>
    </div>
  );
}

export default App;
