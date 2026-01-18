import React from 'react';

const TastingNotesList = ({ tastingNotes, matcha, onDeleteTastingNote }) => {
  const getMatchaName = (matchaId) => {
    const matchaItem = matcha.find(m => m.id === matchaId);
    return matchaItem ? `${matchaItem.name} (${matchaItem.brand})` : 'Unknown Matcha';
  };

  const getRatingStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const getRatingText = (rating) => {
    const ratingTexts = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
    return ratingTexts[rating - 1];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (tastingNotes.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasting notes recorded yet</p>
        <p>Start recording your matcha tasting experiences!</p>
      </div>
    );
  }

  return (
    <div className="list-container">
      <h2>Your Tasting Notes</h2>
      <div className="notes-grid">
        {tastingNotes.map(note => (
          <div key={note.id} className="card tasting-note-card">
            <div className="card-header">
              <h3>{getMatchaName(note.matchaId)}</h3>
              <button 
                onClick={() => onDeleteTastingNote(note.id)}
                className="delete-btn"
                title="Remove this tasting note"
              >
                Remove
              </button>
            </div>
            
            <div className="note-info">
              <div className="ratings-section">
                <h4>Ratings</h4>
                <div className="rating-grid">
                  <div className="rating-item">
                    <span className="rating-label">Flavor:</span>
                    <span className="rating-value">
                      {getRatingStars(note.flavorRating)} ({note.flavorRating}/5)
                    </span>
                  </div>
                  <div className="rating-item">
                    <span className="rating-label">Aroma:</span>
                    <span className="rating-value">
                      {getRatingStars(note.aromaRating)} ({note.aromaRating}/5)
                    </span>
                  </div>
                  <div className="rating-item">
                    <span className="rating-label">Texture:</span>
                    <span className="rating-value">
                      {getRatingStars(note.textureRating)} ({note.textureRating}/5)
                    </span>
                  </div>
                  <div className="rating-item">
                    <span className="rating-label">Overall:</span>
                    <span className="rating-value">
                      {getRatingStars(note.overallRating)} ({note.overallRating}/5)
                    </span>
                  </div>
                </div>
              </div>

              {note.notes && (
                <div className="notes-section">
                  <h4>Tasting Notes</h4>
                  <p className="note-text">{note.notes}</p>
                </div>
              )}

              <div className="brewing-info">
                <h4>Brewing Details</h4>
                <div className="brewing-grid">
                  <div className="brewing-item">
                    <span className="brewing-label">Method:</span>
                    <span className="brewing-value">{note.brewingMethod}</span>
                  </div>
                  <div className="brewing-item">
                    <span className="brewing-label">Temperature:</span>
                    <span className="brewing-value">{note.brewingTemperature}°C</span>
                  </div>
                  <div className="brewing-item">
                    <span className="brewing-label">Date:</span>
                    <span className="brewing-value">{formatDate(note.dateOfTasting)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TastingNotesList;
