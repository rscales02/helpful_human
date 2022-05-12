import "./App.css";

import { Header } from "./components/Header";
import MainPage from "./components/MainPage";

function App() {
  const colors = colorGen();
  return (
    <div className="App">
      <header>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </header>
      <Header></Header>
      <MainPage data={colors}></MainPage>
    </div>
  );
}

export default App;

const colorGen = () => {
  let letters = "0123456789ABCDEF";
  let colors = [];
  for (var i = 0; i < 200; i++) {
    let color = "#";
    for (let j = 0; j < 6; j++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    colors.push(color);
  }
  colors.sort();
  return colors;
};
