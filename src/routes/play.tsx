import { useState, ChangeEvent, FormEvent } from 'react';
import Card from '../components/Card';
import { Link, useNavigate } from "react-router-dom";

import {useLocation} from "react-router-dom";
import characters from '../characters.ts'

export default function Play() {
    // Query parameters for the level
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const level = parseInt(queryParams.get('level')!, 10)
    
    // States for the parent play
    const [levelChars, setLevelChars] = useState(characters[level-1])
    const [randInt, setRandInt] = useState(Math.floor(Math.random() * levelChars.length))
    const [score, setScore] = useState(0)
    const navigate = useNavigate();

    // States for the child card
    const [charDict, setCharDict] = useState(levelChars[randInt])
    const [flip, setFlip] = useState(false);
    const [formData, setFormData] = useState({pinyin: "", tone: ""})
    const [isSmallExploding, setIsSmallExploding] = useState(false);

    console.log(levelChars)
    console.log(randInt)
    console.log(charDict)

    // Event handler functions
    function handleHint() {
        if (flip === false) {
            console.log("Hint!")
        }
        else {
            console.log("Back!")
        }
        setFlip(!flip)
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (formData.pinyin.toLowerCase() === charDict.pinyin && formData.tone === charDict.tone) {
            setIsSmallExploding(true);
            setScore(score+100)
            levelChars.splice(randInt, 1);
            if (levelChars.length === 0) {
                setLevelChars(characters[level-1])
                navigate('/chinese-flashcards/congratulations'); // Redirect to root page
            }

            // Use the functional form of setState to ensure you're working with the latest state
            setRandInt(() => {
                const RandInt = Math.floor(Math.random() * levelChars.length);
                return RandInt;
                });
                setFormData({pinyin: "", tone: ""})
            
            setCharDict(() => {
            const RandInt = Math.floor(Math.random() * levelChars.length);
            return levelChars[RandInt];
            });
        } else {
            console.log("Wrong!");
        }
        event.currentTarget.reset();
        }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setFormData(prevFormData => {
            return {
                ...prevFormData, [event.target.name]: event.target.value
            }
        })
    }
    console.log(formData)
    return (
        <>
            <Card charDict={charDict} flip={flip} isSmallExploding={isSmallExploding} onChange={handleChange} onHint={handleHint} onSubmit={handleSubmit} />
            <Link to={'/chinese-flashcards'} className="btn btn-danger">Home</Link>
            <div className="score">Score = {score}</div>
        </>
    )
}