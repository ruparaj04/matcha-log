import React from 'react';

const MatchaList = ({ matcha, onDeleteMatcha, onEditMatcha }) => {
  if (matcha.length === 0) {
    return (
      <div className="empty-state">
        <h2>No Matcha in Collection</h2>
        <p>Add some matcha to start building your collection!</p>
      </div>
    );
  }

  return (
    <div className="list-container">
      <h2>Matcha Collection</h2>
      <div className="matcha-grid">
        {matcha.map((item) => (
          <div key={item.id} className="matcha-card">
            <h3>{item.name}</h3>
            <p><strong>Brand:</strong> {item.brand}</p>
            <p><strong>Origin:</strong> {item.origin}</p>
            <p><strong>Grade:</strong> {item.grade}</p>
            <p className="price"><strong>Price:</strong> ${item.price}</p>
            {item.description && (
              <p><strong>Description:</strong> {item.description}</p>
            )}
            <div className="card-actions">
              <button 
                onClick={() => onEditMatcha(item)}
                className="btn btn-small btn-secondary"
              >
                Edit
              </button>
              <button 
                onClick={() => onDeleteMatcha(item.id)}
                className="btn btn-small"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchaList;
