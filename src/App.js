import './css/style.min.css';
import { PhotoLoader } from './components/Photoloader';
import { Descriptions } from './components/Descriptions';
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
        <div className = "description-container">
          <Descriptions/>

        </div>
      </main >
    </div >
  );
}

export default App;
