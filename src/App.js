import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="Container">
    
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />

        <footer>
          This was coded by
          <a
            href="https://www.shecodes.io/graduates/123422-mellania-banda"
            target="_blank"
            rel="noreferrer"
          >
            Mellania Banda
          </a>
          , hosted on
          <a
            href="https://github.com/Melbanda28/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Git Hub
          </a>
          and website hosted on
          <a
            href="https://weather-mel-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </header>
    </div>
    </div>
  );
}

