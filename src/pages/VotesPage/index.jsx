import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loading } from '../../components/Loading';
import Votes from '../../components/Votes';

const VotesPage = () => {
  const [loading, setLoading] = useState(true);
  const [votes, setVotes] = useState([]);

  async function getVotes() {
    axios.get("http://localhost:3333/question").then(async (response) => {
      var data = await response.data;
      setVotes(data);
      setLoading(false);
    });
  }

  useEffect(() => {
    getVotes();
  }, [votes])

  return (
    <div className="App App-header">
      {loading ? <Loading /> : <Votes votes={votes} />}
    </div>
  );
}

export default VotesPage;