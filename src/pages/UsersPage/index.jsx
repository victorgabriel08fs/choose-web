import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loading } from '../../components/Loading';
import Users from '../../components/Users';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadUsers() {
    axios.get(`${process.env.REACT_APP_API_URL}/user`).then(async (response) => {
      var data = await response.data;
      setUsers(data);
      setLoading(false);
    });
  }

  useEffect(() => {
    loadUsers()
  }, [users]);


  return (
    <div className="App App-header">
      {loading ? <Loading /> : <Users users={users} />}
    </div>
  );
}

export default UsersPage;