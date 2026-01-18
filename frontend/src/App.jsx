import { useState, useEffect } from 'react'
import './App.css'
import MatchaForm from './components/MatchaForm'
import TastingNoteForm from './components/TastingNoteForm'
import MatchaList from './components/MatchaList'
import TastingNotesList from './components/TastingNotesList'

function App() {
  const [matcha, setMatcha] = useState([])
  const [tastingNotes, setTastingNotes] = useState([])
  const [selectedMatcha, setSelectedMatcha] = useState(null)
  const [activeTab, setActiveTab] = useState('matcha')
  const [showCoverPage, setShowCoverPage] = useState(true)

  // Mock data for demonstration
  useEffect(() => {
    // Mock data for demonstration
    const mockMatcha = [
      {
        id: 1,
        name: "Premium Ceremonial Matcha",
        origin: "Uji, Japan",
        brand: "Ippodo Tea Co.",
        grade: "Ceremonial",
        price: 45.99,
        description: "High-quality ceremonial grade matcha with rich flavor and vibrant green color."
      },
      {
        id: 2,
        name: "Organic Culinary Matcha",
        origin: "Nishio, Japan",
        brand: "DoMatcha",
        grade: "Culinary",
        price: 28.50,
        description: "Perfect for lattes and baking with strong flavor that stands up to milk and sweeteners."
      },
      {
        id: 3,
        name: "Daily Practice Matcha",
        origin: "Kagoshima, Japan",
        brand: "Encha",
        grade: "Premium",
        price: 32.00,
        description: "Well-balanced matcha suitable for daily consumption with smooth texture and mild bitterness."
      }
    ]

    const mockTastingNotes = [
      {
        id: 1,
        matchaId: 1,
        flavorRating: 5,
        aromaRating: 4,
        textureRating: 5,
        overallRating: 5,
        notes: "Exceptional quality with perfect balance of sweet flavor. Smooth texture with no bitterness.",
        brewingMethod: "Traditional whisking",
        brewingTemperature: 70,
        dateOfTasting: "2025-08-10"
      },
      {
        id: 2,
        matchaId: 2,
        flavorRating: 4,
        aromaRating: 3,
        textureRating: 4,
        overallRating: 4,
        notes: "Strong flavor perfect for lattes. Slightly bitter when consumed straight but excellent with milk.",
        brewingMethod: "Matcha latte",
        brewingTemperature: 75,
        dateOfTasting: "2025-08-12"
      }
    ]
    setMatcha(mockMatcha)
    setTastingNotes(mockTastingNotes)
  }, [])

  // CRUD operations for matcha
  const addMatcha = (newMatcha) => {
    const id = Math.max(...matcha.map(m => m.id || 0), 0) + 1
    const matchaWithId = { ...newMatcha, id }
    setMatcha([...matcha, matchaWithId])
  }

  const deleteMatcha = (id) => {
    setMatcha(matcha.filter(m => m.id !== id))
    setTastingNotes(tastingNotes.filter(note => note.matchaId !== id))
  }

  const editMatcha = (id, updatedMatcha) => {
    setMatcha(matcha.map(m => m.id === id ? { ...updatedMatcha, id } : m))
    setSelectedMatcha(null)
  }

  // CRUD operations for tasting notes
  const addTastingNote = (newNote) => {
    const id = Math.max(...tastingNotes.map(n => n.id || 0), 0) + 1
    const noteWithId = { ...newNote, id }
    setTastingNotes([...tastingNotes, noteWithId])
  }

  const deleteTastingNote = (id) => {
    setTastingNotes(tastingNotes.filter(note => note.id !== id))
  }

  // Cover page component
  if (showCoverPage) {
      return (
        <div className="cover-page">
          <div className="floating-elements">
            <div className="floating-element">✨</div>
            <div className="floating-element">✨</div>
            <div className="floating-element">✨</div>
            <div className="floating-element">✨</div>
            <div className="floating-element">✨</div>
            <div className="floating-element"></div>
            <div className="floating-element"></div>
            <div className="floating-element">✨</div>
            <div className="floating-element"></div>
          </div>
          <div className="cover-content">
            <h1 className="cover-title"> Matcha Log</h1>
            <p className="cover-subtitle">Your Personal Matcha Tasting Journey</p>
            <div className="cover-description">
              <p>Track your matcha collection and record detailed tasting notes</p>
              <p>Discover your preferences and perfect your brewing technique</p>
            </div>
            <button 
              className="start-button"
              onClick={() => setShowCoverPage(false)}
            >
              Start Your Journey ✨
            </button>
          </div>
        </div>
      )
    }

  // Main application
  return (
    <div className="app">
      <header className="header">
        <h1> Matcha Tasting Log</h1>
        <p>Track your matcha collection and tasting experiences</p>
      </header>

      <nav className="nav-tabs">
        <button 
          className={`nav-tab ${activeTab === 'matcha' ? 'active' : ''}`}
          onClick={() => setActiveTab('matcha')}
        >
          ⭐ My Collection
        </button>
        <button 
          className={`nav-tab ${activeTab === 'add-matcha' ? 'active' : ''}`}
          onClick={() => setActiveTab('add-matcha')}
        >
          ➕ Add Matcha
        </button>
        <button 
          className={`nav-tab ${activeTab === 'notes' ? 'active' : ''}`}
          onClick={() => setActiveTab('notes')}
        >
          ⭐ Tasting Notes
        </button>
        <button 
          className={`nav-tab ${activeTab === 'add-note' ? 'active' : ''}`}
          onClick={() => setActiveTab('add-note')}
        >
          ⭐ Add Note
        </button>
      </nav>

      <main className="content">
        {activeTab === 'matcha' && (
          <MatchaList 
            matcha={matcha}
            onDeleteMatcha={deleteMatcha}
            onEditMatcha={(matchaItem) => {
              setSelectedMatcha(matchaItem)
              setActiveTab('add-matcha')
            }}
          />
        )}

        {activeTab === 'add-matcha' && (
          <MatchaForm 
            onAddMatcha={selectedMatcha ? editMatcha : addMatcha}
            selectedMatcha={selectedMatcha}
            isEditing={!!selectedMatcha}
          />
        )}

        {activeTab === 'notes' && (
          <TastingNotesList 
            tastingNotes={tastingNotes}
            matcha={matcha}
            onDeleteTastingNote={deleteTastingNote}
          />
        )}

        {activeTab === 'add-note' && (
          <TastingNoteForm 
            matcha={matcha}
            onAddTastingNote={addTastingNote}
          />
        )}
      </main>
    </div>
  )
}
export default App
