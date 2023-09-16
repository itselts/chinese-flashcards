import { useState, ChangeEvent } from "react";
import ReactCardFlip from "react-card-flip";
import ConfettiExplosion from 'react-confetti-explosion';

import '../styles.css';
interface CharDict {
    char: string;
    pinyin: string;
    tone: string;
    hint: string;
  }
interface CardProps {
    charDict: CharDict; 
  }

export default function Card({ charDict }: CardProps) {
    const char = charDict.char
    const pinyin = charDict.pinyin
    const tone = charDict.tone
    const hint = charDict.hint

    const [flip, setFlip] = useState(false);
    const [score, setScore] = useState(0)
    const [formData, setFormData] = useState({PinYinIn: "", ToneIn: ""})
    const [isSmallExploding, setIsSmallExploding] = useState(false);

    const smallProps = {
        force: 0.4,
        duration: 2200,
        particleCount: 30,
        width: 400,
      };

    function handleHint() {
        if (flip === false) {
            console.log("Hint!")
        }
        else {
            console.log("Back!")
        }
        setFlip(!flip)
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (formData.PinYinIn === pinyin && formData.ToneIn === tone) {
            setScore(score+100)
            setIsSmallExploding(true)
        }
        else {
            console.log("Wrong!")
        }
        event.currentTarget.reset()

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
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form--input">
                            <p>Pin Yin</p>
                            <input type='text' autoComplete="off" onChange={handleChange} name="PinYinIn"/>
                        </div>
                        <div className='form--input'>
                            <p>Tone</p>
                            <input type='text' autoComplete="off" placeholder="Numeric" onChange={handleChange} name="ToneIn"/>
                        </div>
                    <button className="btn btn-secondary" type="button" onClick={handleHint}>Hint</button>
                    <button className="btn btn-primary" type="submit">Submit {isSmallExploding && <ConfettiExplosion {...smallProps} />}</button>
                    </form>
                </div>

                <div className="card">
                    <h1 className="card-title-hint">{hint}</h1>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form--input">
                                <p>Pin Yin</p>
                                <input type='text' autoComplete="off" onChange={handleChange} name="PinYinIn"/>
                            </div>
                            <div className='form--input'>
                                <p>Tone</p>
                                <input type='text' autoComplete="off" placeholder="Numeric" onChange={handleChange} name="ToneIn"/>
                            </div>
                        <button className="btn btn-secondary" type="button" onClick={handleHint}>Back</button>
                        <button className="btn btn-primary" type="submit">Submit</button>
                        </form>
                </div>
            </ReactCardFlip>
            <div className="score">Score = {score}</div>
        </div>

    )
}