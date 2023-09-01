import '../App.css'
import {useState} from 'react'
import ImageBar from '../components/ImageBar'
import LevelUpButton from '../components/LevelUpButton'
import PlayButton from '../components/PlayButton'
import Subtext from '../components/Subtext'

export default function Root() {
    // State to keep track of the count
    const [count, setCount] = useState(1);

    function handleClick() {
        const newCount = count === 5 ? 1 : count + 1
        setCount(newCount)
    };

    function handleReset() {
        setCount(1)
    };
  
  return (
    <div className="center-container">
      <ImageBar />
      <h1 className='header-style'>Chinese Flashcards</h1>
      <div>
        <LevelUpButton count={count} handleClick={handleClick} handleReset={handleReset}/>
      </div>
      <PlayButton Level={count.toString()} />
      <Subtext count={count}/>
    </div>
  )
}