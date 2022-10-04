import './App.css';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loading } from './components/Loading';
import { Question } from './components/Question';
import { FaWhatsappSquare } from 'react-icons/fa';

function App() {
  const [alts, setAlts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [choosed, setChoosed] = useState(false);

  function handleNext() {
    axios.get(`${process.env.REACT_APP_API_URL}/alternative/random`).then(async (response) => {
      var data = await response.data;
      setAlts(data);
      setLoading(false);
      setChoosed(false);
    });
  }

  function getAlts() {
    axios.get(`${process.env.REACT_APP_API_URL}/alternative/random`).then(async (response) => {
      var data = await response.data;
      setAlts(data);
      setLoading(false);
    });
  }
  useEffect(() => {
    getAlts()
  }, []);


  return (
    <>
      <div className="App App-header">
        {loading ? <Loading /> : <Question choosed={choosed} setChoosed={setChoosed} alt1={alts[0]} alt2={alts[1]} />}
        <button className="mt-2" onClick={handleNext}>Próximo</button>
      {choosed?<footer className='mt-16 text-lg flex items-center justify-center'>
        Se você está usando este app, sinta-se privilegiado... Incentive o trabalho de um programador, mande um "olá" - <FaWhatsappSquare /> - (38)  99158-7105
      </footer>:''}
      </div>
    </>
  );
}

export default App;
