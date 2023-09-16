import { useState, ChangeEvent } from "react";
import ReactCardFlip from "react-card-flip";

import '../styles.css';
interface CharDict {
    char: string;
    pinyin: string;
    tone: string;
    hint: string;
  }
interface CardProps {
    charDict: CharDict; // Specify that the Level prop is a string
  }

export default function Card({ charDict }: CardProps) {
    const char = charDict.char
    const pinyin = charDict.pinyin
    const tone = charDict.tone
    const hint = charDict.hint

    const [flip, setFlip] = useState(false);
    const [score, setScore] = useState(0)
    const [formData, setFormData] = useState({PinYinIn: "", ToneIn: ""})

    function handleHint() {
        if (flip === false) {
            console.log("Hint!")
        }
        else {
            console.log("Back!")
        }
    setFlip(!flip)
    }

    function handleSubmit() {
        if (formData.PinYinIn === pinyin && formData.ToneIn === tone) {
            setScore(score+100)
            setFlip(!flip)
        }
        else {
            console.log("Wrong!")
        }
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setFormData(prevFormData => {
            return {
                ...prevFormData, [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div>
            <ReactCardFlip isFlipped={flip} flipDirection='horizontal'>
                <div className="card">
                    <h1 className="card-title-char">{char}</h1>
                    <form className="form">
                        <div className="form--input">
                            <p>Pin Yin</p>
                            <input type='text' autoComplete="off" onChange={handleChange} name="PinYinIn"/>
                        </div>
                        <div className='form--input'>
                            <p>Tone</p>
                            <input type='text' autoComplete="off" placeholder="Numeric" onChange={handleChange} name="ToneIn"/>
                        </div>
                    </form>
                <button className="btn btn-secondary" onClick={handleHint}>Hint</button>
                <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
                <div className="card">
                    <h1 className="card-title-hint">{hint}</h1>
                        <form className="form">
                            <div className="form--input">
                                <p>Pin Yin</p>
                                <input type='text' autoComplete="off" onChange={handleChange} name="PinYinIn"/>
                            </div>
                            <div className='form--input'>
                                <p>Tone</p>
                                <input type='text' autoComplete="off" placeholder="Numeric" onChange={handleChange} name="ToneIn"/>
                            </div>
                        </form>
                    <button className="btn btn-secondary" onClick={handleHint}>Back</button>
                    <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
            </ReactCardFlip>
            <div className="score">Score = {score}</div>
        </div>

    )
}