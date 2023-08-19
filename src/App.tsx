import './App.css'
import ImageBar from './components/ImageBar'
import LevelUpButton from './components/LevelUpButton'
import PlayButton from './components/PlayButton'

function App() {
  return (
    <div className="center-container">
      <ImageBar />
      <h1 className='header-style'>Chinese Flashcards</h1>
      <div>
        <LevelUpButton />
      </div>
      <PlayButton />
      <p className="read-the-docs">
        You suck at Chinese
      </p>
    </div>
  )
}

export default App
