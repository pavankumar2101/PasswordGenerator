// MyComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const APIcalls = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleCreate = () => {
    axios.post('/api/data', formData)
      .then(response => {
        console.log('Data created successfully:', response.data);
        fetchData();
      })
      .catch(error => {
        console.error('Error creating data:', error);
      });
  };

  const handleUpdate = (id, newData) => {
    axios.put(`/api/data/${id}`, newData)
      .then(response => {
        console.log('Data updated successfully:', response.data);
        fetchData();
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`/api/data/${id}`)
      .then(response => {
        console.log('Data deleted successfully');
        fetchData();
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>Data</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name} - {item.email}
            <button onClick={() => handleUpdate(item.id, { name: `${item.name} Updated`, email: item.email })}>Update</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Create Data</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleCreate(); }}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default APIcalls;
