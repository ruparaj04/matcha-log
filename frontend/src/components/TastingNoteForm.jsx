import React, { useState } from 'react';

const TastingNoteForm = ({ matcha, onAddTastingNote }) => {
  const [formData, setFormData] = useState({
    matchaId: '',
    flavorRating: 3,
    aromaRating: 3,
    textureRating: 3,
    overallRating: 3,
    notes: '',
    brewingMethod: 'Traditional whisking',
    brewingTemperature: 70,
    dateOfTasting: new Date().toISOString().split('T')[0]
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.matchaId) {
      alert('Please select a matcha to rate');
      return;
    }

    onAddTastingNote({
      ...formData,
      matchaId: parseInt(formData.matchaId),
      flavorRating: parseInt(formData.flavorRating),
      aromaRating: parseInt(formData.aromaRating),
      textureRating: parseInt(formData.textureRating),
      overallRating: parseInt(formData.overallRating),
      brewingTemperature: parseInt(formData.brewingTemperature)
    });

    setSuccessMessage('Tasting note added successfully!');
    
    // Reset form
    setFormData({
      matchaId: '',
      flavorRating: 3,
      aromaRating: 3,
      textureRating: 3,
      overallRating: 3,
      notes: '',
      brewingMethod: 'Traditional whisking',
      brewingTemperature: 70,
      dateOfTasting: new Date().toISOString().split('T')[0]
    });

    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getRatingDescription = (rating) => {
    const descriptions = {
      1: 'Poor',
      2: 'Fair',
      3: 'Good',
      4: 'Very Good',
      5: 'Excellent'
    };
    return descriptions[rating] || 'Good';
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? '' : 'empty'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  const renderRatingSlider = (name, label, value) => (
    <div className="form-group rating-slider-container">
      <div className="rating-label-container">
        <label className="rating-label">{label}</label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="rating-value-display">{value}</div>
          <div className="star-rating">
            {renderStars(parseInt(value))}
          </div>
        </div>
      </div>
      
      <div className="rating-slider-wrapper">
        <input
          type="range"
          id={name}
          name={name}
          min="1"
          max="5"
          value={value}
          onChange={handleChange}
        />
        <div className="rating-ticks">
          <span className="rating-tick">1</span>
          <span className="rating-tick">2</span>
          <span className="rating-tick">3</span>
          <span className="rating-tick">4</span>
          <span className="rating-tick">5</span>
        </div>
        <div className="rating-description">
          {getRatingDescription(parseInt(value))}
        </div>
      </div>
    </div>
  );

  if (matcha.length === 0) {
    return (
      <div className="empty-state">
        <h2>No Matcha Available</h2>
        <p>Add some matcha to your collection first before recording tasting notes.</p>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h2>Add Tasting Note</h2>
      
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="tasting-form">
        <div className="form-group">
          <label htmlFor="matchaId">Select Matcha *</label>
          <select
            id="matchaId"
            name="matchaId"
            value={formData.matchaId}
            onChange={handleChange}
            required
          >
            <option value="">Choose a matcha...</option>
            {matcha.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} ({item.brand})
              </option>
            ))}
          </select>
        </div>

        <div className="ratings-section">
          <h3>Ratings (1-5 scale)</h3>
          
          {renderRatingSlider('flavorRating', 'Flavor Rating', formData.flavorRating)}
          {renderRatingSlider('aromaRating', 'Aroma Rating', formData.aromaRating)}
          {renderRatingSlider('textureRating', 'Texture Rating', formData.textureRating)}
          {renderRatingSlider('overallRating', 'Overall Rating', formData.overallRating)}
        </div>

        <div className="form-group">
          <label htmlFor="brewingMethod">Brewing Method</label>
          <select
            id="brewingMethod"
            name="brewingMethod"
            value={formData.brewingMethod}
            onChange={handleChange}
          >
            <option value="Traditional whisking">Traditional whisking</option>
            <option value="Matcha latte">Matcha latte</option>
            <option value="Cold brew">Cold brew</option>
            <option value="Tea ceremony">Tea ceremony</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="brewingTemperature">Water Temperature (°C)</label>
          <input
            type="number"
            id="brewingTemperature"
            name="brewingTemperature"
            value={formData.brewingTemperature}
            onChange={handleChange}
            min="60"
            max="100"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateOfTasting">Tasting Date</label>
          <input
            type="date"
            id="dateOfTasting"
            name="dateOfTasting"
            value={formData.dateOfTasting}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="notes">Tasting Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Describe the flavor, aroma, texture, and overall experience..."
            rows="5"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Tasting Note
        </button>
      </form>
    </div>
  );
};

export default TastingNoteForm;
