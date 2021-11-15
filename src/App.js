import './App.css';
import './style.css';
import './femme.jpg';


function App() {
  return (
    <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">My name is shrek</h1>
          <br />
          <img src="/shrek.jpg" alt=""/>
          <br />
          <img src="/femme.jpg" alt="" />
        </div>
        <vidéo width={320} height={240} contrôles>
          <source src="maVidéo.mp4" type="video/mp4" />
        </vidéo>
        </div>
    );
  }


export default App;
