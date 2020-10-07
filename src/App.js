import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios"

import Data from "./components/data.js"

function App() {
  const [nasaData, setNasaData] = useState([]);
  
  useEffect(() => {
    const fetchNasa = () => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=Pi5Mgyvhpkw7125u0KDIXH9CdqJqneHVvuebfRgy")
      .then(res => {
        console.log(res.data);
        setNasaData(res.data);
      })
      .catch(err => {
        debugger
      })
    }
  fetchNasa();
  }, [])

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Data nasaData={nasaData}/>
    </div>
  );
}


export default App;