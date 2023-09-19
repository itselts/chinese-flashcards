import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import Card from '../components/Card';
import characters from '../characters.ts'

export default function Play() {
    // Query parameters for the level
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const level = parseInt(queryParams.get('level')!, 10)
    
    // States for the parent play
    const [levelChars, setLevelChars] = useState(characters[level-1])
    const [randInt, setRandInt] = useState(Math.floor(Math.random() * levelChars.length)) // DONT NEED THIS AS A STATE
    const [score, setScore] = useState(0)
    const [error, setError] = useState(false)
    const navigate = useNavigate();

    // States for the child card
    const [charDict, setCharDict] = useState(levelChars[randInt])
    const [flip, setFlip] = useState(false);
    const [formData, setFormData] = useState({pinyin: "", tone: ""})
    const [isSmallExploding, setIsSmallExploding] = useState(false);

    // Event handler functions
    function handleHint() {
        if (flip === false) {
            console.log("Hint!")
        }
        else {
            console.log("Back!")
        }
        setFlip(!flip)
        setError(false);
    }

    console.log(levelChars)
    console.log(charDict)

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        setIsSmallExploding(false)
        event.preventDefault();
        
        if (formData.pinyin.toLowerCase() === charDict.pinyin && formData.tone === charDict.tone) {
            setIsSmallExploding(true);
            setScore(score+100)
            setLevelChars(levelChars.filter((_, i) => {return i !== randInt}))
            console.log(levelChars)

            if (levelChars.length === 1) {
                navigate('/chinese-flashcards/congratulations'); // Redirect to root page
            }

            setRandInt(Math.floor(Math.random() * levelChars.length))
            setCharDict(levelChars[randInt-1])
            setFormData({pinyin: "", tone: ""})
            setError(false)
        } else {
            setError(true);
        }
        event.currentTarget.reset();
        }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setFormData(prevFormData => {
            return {
                ...prevFormData, [event.target.name]: event.target.value
            }
        });
    }
    console.log(formData)

    useEffect(() => {
        isSmallExploding && setTimeout(() => {
            setIsSmallExploding(false);
        }, 1000)
    }, [isSmallExploding])

    return (
        <>
            <Card charDict={charDict} flip={flip} isSmallExploding={isSmallExploding} onChange={handleChange} onHint={handleHint} onSubmit={handleSubmit} />
            {error && <p style={{ color: "red" }}>Incorrect answer. Try again.</p>}
            <Link to={'/chinese-flashcards'} className="btn btn-danger">Home</Link>
            <div className="score">Score = {score}</div>
        </>
    )
}