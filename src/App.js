import "./App.css";
import Calc from "./components/Calc";
import Cards from "./components/Cards";
import Greeting from "./components/Greeting";
const name = "parth";
const currentTime = new Date().toLocaleTimeString();
const currentDate = new Date().toLocaleDateString();

function App() {
  return (
    <>
      <Cards
        imgLink="https://picsum.photos/id/237/500/500"
        cardCate='A Netflix Origanal series.'
        cardTitle=" seris 1"
        link="https://color-picker.dllplayer.com/welcome-edge-addons"
      />
      <Cards
        imgLink="https://picsum.photos/id/237/600/500"
        cardCate=' Origanal series.'
        cardTitle=" seris 2"
        link="https://color-picker.dllplayer.com/welcome-edge-addons"
      />
      <Cards
        imgLink="https://picsum.photos/id/237/700/500"
        cardCate='A Netflix series.'
        cardTitle=" seris 3"
        link="https://color-picker.dllplayer.com/welcome-edge-addons"
      />
      {/* <Calc/> */}
      {/* <Greeting/> */}
      {/* <h1>
        hello, i am {name}.
      </h1>
      <p>my fev no {3 * 3}</p>
      <p>today date is {currentDate} </p>
      <p>current time date is {currentTime} </p> */}
    </>
  );
}

export default App;
