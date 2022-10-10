import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loading } from '../../components/Loading';
import { Question } from '../../components/Question';
import { useAuth } from '../../contexts/auth';

const HomePage = () => {
  const [alts, setAlts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [choosed, setChoosed] = useState(false);
  const { user } = useAuth();

  function handleNext() {
    axios.get(`${process.env.REACT_APP_API_URL}/alternative/random/${user.id}`).then(async (response) => {
      var data = await response.data;
      setAlts(data);
      setLoading(false);
      setChoosed(false);
    });
  }

  function getAlts() {
    axios.get(`${process.env.REACT_APP_API_URL}/alternative/random/${user.id}`).then(async (response) => {
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
      <h1 className='text-3xl mb-9'>Choose</h1>
      {loading ? <Loading /> : <Question choosed={choosed} setChoosed={setChoosed} alt1={alts[0]} alt2={alts[1]} />}
      <button className="mt-2" onClick={handleNext}>Next</button>
      {choosed ? <footer className='max-w-[50vw] mt-16 flex items-center'>

      </footer> : ''}
    </div>
  );
}

export default HomePage;