import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header'
import Movie from './components/Movie'

function App() {
  const [originals, setOriginals] = useState([])

  // useEffect(() => {
  //   axios.get(`${URL}${endpoints.originals}`, {
  //     params: {
  //       api_key: API_KEY
  //     }
  //   })
  //   .then((res) => setOriginals(res.data.results))
  // })

  return (
    <div className="App">
      <Header />
      <Movie movie={originals} />
    </div>
  );
}

export default App;
