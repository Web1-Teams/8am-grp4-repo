import React from 'react';
import '../styles/Nutrationtable.css';  

const Table = ({ title, focus, benefits, foods }) => {
  return (
    <div className="table-container">
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            <th>Focus</th>
            <th>Key Benefits</th>
            <th>Typical Foods</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{focus}</td>
            <td>{benefits}</td>
            <td>{foods}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
