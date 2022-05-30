import logo from './logo.svg';
import './App.css';
import HeadShot from './HeadShot.js';
import InfoLinks from './Links.js';
import InfoParagraph from './Info.js';
import MyName from './name.js';

function App() {
  return (
    <div className="AppContainer">
      <HeadShot />
      <MyName />
      <InfoLinks />
      <InfoParagraph />
    </div>
  );
}

export default App;
