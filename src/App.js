import './css/style.min.css';
import { PhotoLoader } from './components/Photoloader';
import { Summary } from './components/Summary';
import { Contactinfo } from './components/Contactinfo';


function App() {
  return (
    <div className="App">
      <main className="container">
        <div className="contacts-container theme_standart_color">
          <div className="img_adaptive">
            <PhotoLoader />
          </div>
          <Contactinfo />
        </div>
        <div className="description-container">
          <Summary />
        </div>
      </main >
    </div >
  );
}

export default App;
