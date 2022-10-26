import Footer from "./component/Footer";
import Hero from "./component/Hero";
import breach from "./assets/breach.jpg";

function App() {
  return (
    <div className="App">
      <div className="card">
        <img src={breach} alt='head' />
      </div>
	  <br/> 
      <br/> 
      <div className="card1">
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

export default App;
