import "./App.css";
import PersonelInfo from "./components/PersonelInfo";
import Sayac from "./components/Sayac";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <Sayac />
      <Title />
      <PersonelInfo />
    </div>
  );
}

export default App;
