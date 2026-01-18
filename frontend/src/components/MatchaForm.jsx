import React, { useState, useEffect } from 'react';

const MatchaForm = ({ onAddMatcha, selectedMatcha, isEditing }) => {
  const [formData, setFormData] = useState({
    name: '',
    origin: '',
    brand: '',
    grade: 'Premium',
    price: '',
    description: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (selectedMatcha) {
      setFormData(selectedMatcha);
    }
  }, [selectedMatcha]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEditing) {
      onAddMatcha(selectedMatcha.id, formData);
      setSuccessMessage('Matcha updated successfully!');
    } else {
      onAddMatcha(formData);
      setSuccessMessage('Matcha added to collection!');
      setFormData({
        name: '',
        origin: '',
        brand: '',
        grade: 'Premium',
        price: '',
        description: ''
      });
    }
    
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="form-container">
      <h2>{isEditing ? 'Edit Matcha' : 'Add New Matcha'}</h2>
      
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="matcha-form">
        <div className="form-group">
          <label htmlFor="name">Matcha Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="e.g., Premium Ceremonial Matcha"
          />
        </div>

        <div className="form-group">
          <label htmlFor="brand">Brand *</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
            placeholder="e.g., Ippodo Tea Co."
          />
        </div>

        <div className="form-group">
          <label htmlFor="origin">Origin *</label>
          <input
            type="text"
            id="origin"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            required
            placeholder="e.g., Uji, Japan"
          />
        </div>

        <div className="form-group">
          <label htmlFor="grade">Grade *</label>
          <select
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
          >
            <option value="Ceremonial">Ceremonial</option>
            <option value="Premium">Premium</option>
            <option value="Culinary">Culinary</option>
            <option value="Ingredient">Ingredient</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price ($) *</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            step="0.01"
            min="0"
            placeholder="e.g., 45.99"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the matcha's characteristics, flavor profile, or any special notes..."
            rows="4"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {isEditing ? 'Update Matcha' : 'Add Matcha'}
        </button>
      </form>
    </div>
  );
};

export default MatchaForm;
