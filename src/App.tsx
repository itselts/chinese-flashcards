import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LevelUpButton from './components/LevelUpButton'


function App() {
  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Chinese Flashcards</h1>
      <div className="card">
        <LevelUpButton/>
      </div>
      <p className="read-the-docs">
        You suck at Chinese
      </p>
    </>
  )
}

export default App
