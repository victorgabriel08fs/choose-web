import './App.css';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loading } from './components/Loading';
import { Question } from './components/Question';

function App() {
  const [alts, setAlts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [choosed, setChoosed] = useState(false);

  function handleNext() {
    axios.get("http://localhost:3333/alternative/random").then(async (response) => {
      var data = await response.data;
      setAlts(data);
      setLoading(false);
      setChoosed(false);
    });
  }

  function getAlts() {
    axios.get("http://localhost:3333/alternative/random").then(async (response) => {
      var data = await response.data;
      setAlts(data);
      setLoading(false);
    });
  }
  useEffect(() => {
    getAlts()
  }, []);


  return (
    <div className="App App-header">
      {loading ? <Loading /> : <Question choosed={choosed} setChoosed={setChoosed} alt1={alts[0]} alt2={alts[1]} />}
      <button className="mt-2" onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;
