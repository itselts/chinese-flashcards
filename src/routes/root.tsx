import '../App.css'
import {useState} from 'react'
import ImageBar from '../components/ImageBar'
import LevelUpButton from '../components/LevelUpButton'
import PlayButton from '../components/PlayButton'
import Subtext from '../components/Subtext'
import topics from '../topics.ts'

export default function Root() {
    // State to keep track of the count
    const [count, setCount] = useState(1);

    function handleRight() {
        const newCount = count === 5 ? 1 : count + 1
        setCount(newCount)
    };

    function handleLeft() {
        const newCount = count === 1 ? 5 : count - 1
        setCount(newCount)
    };
  
  return (
    <div>
      <ImageBar />
      <h1 className='h1--root'>Chinese Flashcards</h1>
      <h2 className="underlined">Topic of choice</h2>
      <h2>{topics[count-1]}</h2>
      <div>
        <LevelUpButton count={count} handleLeft={handleLeft} handleRight={handleRight}/>
      </div>
      <PlayButton Level={count.toString()} />
      <Subtext count={count}/>
    </div>
  )
}