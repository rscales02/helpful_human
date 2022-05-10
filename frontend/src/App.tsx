import "./App.css";

import { Header } from "./components/Header";
import MainPage from "./components/MainPage";
import { Sidebar } from "./components/Sidebar";

function App() {
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
      <div className="m--auto" style={{ minHeight: "100%" }}>
        <Sidebar></Sidebar>
        <MainPage></MainPage>
      </div>
    </div>
  );
}

export default App;
