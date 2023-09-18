import { ChangeEvent, FormEvent } from 'react';
import ReactCardFlip from "react-card-flip";
import ConfettiExplosion from 'react-confetti-explosion';

import '../styles.css';

interface charDict {
    char: string;
    pinyin: string;
    tone: string;
    hint: string;
}
  
interface CardProps {
    charDict: charDict; 
    flip: boolean;
    isSmallExploding: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onHint: () => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function Card({ charDict, flip, isSmallExploding, onChange, onHint, onSubmit }: CardProps) {
    // Small explosion props
    const smallProps = {
        force: 0.4,
        duration: 2200,
        particleCount: 30,
        width: 400,
      };
    
    return (
        <div>
            <ReactCardFlip isFlipped={flip} flipDirection='horizontal'>
                <div className="card">
                    <h1 className="card-title-char">{charDict.char}</h1>
                    <form className="form" onSubmit={onSubmit}>
                        <div className="form--input">
                            <label>Pin Yin</label>
                            <input type='text' autoComplete="off" onChange={onChange} name="pinyin"/>
                        </div>
                        <div className='form--input'>
                            <label>Tone</label>
                            <input type='text' autoComplete="off" placeholder="Numeric" onChange={onChange} name="tone"/>
                        </div>
                    <button className="btn btn-secondary" type="button" onClick={onHint}>Hint</button>
                    <button className="btn btn-primary" type="submit">Submit {isSmallExploding && <ConfettiExplosion {...smallProps} />}</button>
                    </form>
                </div>

                <div className="card">
                    <h1 className="card-title-hint">{charDict.hint}</h1>
                        <form className="form" onSubmit={onSubmit}>
                            <div className="form--input">
                                <p>Pin Yin</p>
                                <input type='text' autoComplete="off" onChange={onChange} name="pinyin"/>
                            </div>
                            <div className='form--input'>
                                <p>Tone</p>
                                <input type='text' autoComplete="off" placeholder="Numeric" onChange={onChange} name="tone"/>
                            </div>
                        <button className="btn btn-secondary" type="button" onClick={onHint}>Back</button>
                        <button className="btn btn-primary" type="submit">Submit</button>
                        </form>
                </div>
            </ReactCardFlip>
        </div>
    )
}