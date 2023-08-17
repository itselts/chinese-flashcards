import zhongwen from '/zhong-wen.png'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LevelUpButton from './components/LevelUpButton'


function App() {
  return (
    <>
      <nav>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://en.wikipedia.org/wiki/Xi_Jinping" target="_blank">
          <img src={zhongwen} className='logo react' alt='ZhongWen' />
        </a>
      </nav>
      <h1 className='inter-tight-header header-style'>Chinese Flashcards</h1>
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
