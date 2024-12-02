import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, edit, remove } from './Redux/Action';
import './App.css'
export default function Form() {
  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [no, setNo] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (editingId) {

      dispatch(edit(editingId, { name, gender, role, no }));
    } else {

      dispatch(add({ name, gender, role, no }));
    }

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setGender('');
    setRole('');
    setEditingId(null);
  };


  const handleEdit = (task) => {
    setName(task.name);
    setGender(task.gender);
    setRole(task.role);
    setEditingId(task.id);
  };


  const handleDelete = (id) => {
    dispatch(remove(id));
  };

  return (
    <>
      <div className="div">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input type="number" className="form" placeholder="Employee ID" onChange={(e) => setNo(e.target.value)} value={no} />
          <br />
          <select
            className="form"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <br />
          <input
            type="radio"
            name="gender"
            className='form'
            id="male"
            value="Male"
            checked={gender === 'Male'}
            onChange={() => setGender('Male')}
          />
          <span>
            <label htmlFor="male">Male</label>

          </span>
          <input type="radio" name="gender" id="female" value="Female" checked={gender === 'Female'} onChange={() => setGender('Female')} />
          <label htmlFor="female">Female</label>
          <br /><br />
          <input type="submit" value={editingId ? 'Update' : 'Submit'} className="pointer" style={{ borderRadius: '20px', height: '30px', width: '100px', cursor: 'pointer', }}
          />
        </form>
      </div>
      <br />
      <br />
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Role</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.id}</td>
              <td>{task.role}</td>
              <td>{task.gender}</td>
              <td>
                <button onClick={() => handleEdit(task)}>Edit</button>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
