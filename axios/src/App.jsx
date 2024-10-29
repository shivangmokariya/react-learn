import { useState, useEffect } from 'react';
import './App.css';
import axios from './axios';

function App() {
  const [resData, setResData] = useState([]);
  const [err, setErr] = useState('');
  const [page, setPage] = useState(1);
  const [newUser, setNewUser] = useState({ first_name: '', last_name: '', email: '' });
  const [editingUser, setEditingUser] = useState(null);

  const fetchData = () => {
    axios
      .get(`/users?page=${page}`)
      .then((res) => {
        setResData(res.data.data);
      })
      .catch((error) => setErr(error.message));
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const createUser = () => {
    axios
      .post('/users', newUser)
      .then((res) => {
        setResData([...resData, res.data]);
        setNewUser({ first_name: '', last_name: '', email: '' });
      })
      .catch((error) => setErr(error.message));
  };

  const updateUser = (id) => {
    axios
      .put(`/users/${id}`, editingUser)
      .then((res) => {
        setResData(
          resData.map((user) => (user.id === id ? { ...user, ...editingUser } : user))
        );
        setEditingUser(null);
      })
      .catch((error) => setErr(error.message));
  };

  const deleteUser = (id) => {
    axios
      .delete(`/users/${id}`)
      .then(() => {
        setResData(resData.filter((user) => user.id !== id));
      })
      .catch((error) => setErr(error.message));
  };

  return (
    <div className="app">
      {err && <p style={{ color: 'red' }}>Error: {err}</p>}
      <table className="data-table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {resData.map((item) => (
            <tr key={item.id}>
              <td><img src={item.avatar} alt={`${item.first_name} ${item.last_name}`} /></td>
              <td>
                {editingUser?.id === item.id ? (
                  <input
                    type="text"
                    value={editingUser.first_name}
                    onChange={(e) => setEditingUser({ ...editingUser, first_name: e.target.value })}
                  />
                ) : (
                  item.first_name
                )}
              </td>
              <td>
                {editingUser?.id === item.id ? (
                  <input
                    type="text"
                    value={editingUser.last_name}
                    onChange={(e) => setEditingUser({ ...editingUser, last_name: e.target.value })}
                  />
                ) : (
                  item.last_name
                )}
              </td>
              <td>
                {editingUser?.id === item.id ? (
                  <input
                    type="email"
                    value={editingUser.email}
                    onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                  />
                ) : (
                  item.email
                )}
              </td>
              <td>
                {editingUser?.id === item.id ? (
                  <button onClick={() => updateUser(item.id)}>Save</button>
                ) : (
                  <button onClick={() => setEditingUser(item)}>Edit</button>
                )}
                <button onClick={() => deleteUser(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Previous Page</button>
        <span>Page {page}</span>
        <button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>
      </div>

      {/* Create New User */}
      <div className="create-user">
        <h3>Create New User</h3>
        <input
          type="text"
          placeholder="First Name"
          value={newUser.first_name}
          onChange={(e) => setNewUser({ ...newUser, first_name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={newUser.last_name}
          onChange={(e) => setNewUser({ ...newUser, last_name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button onClick={createUser}>Create User</button>
      </div>
    </div>
  );
}

export default App;

