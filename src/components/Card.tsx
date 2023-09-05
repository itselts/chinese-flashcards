import '../styles.css';
import characters from '../characters.ts'

export default function Card() {

    function handleHint() {
        console.log('Hint!')
    }

    function handleSubmit() {
        console.log('Submit!')
    }

    return (
        <div className="card">
            <h1 className="card-title">{characters[4][0].char}</h1>
            <form className="form">
                <div className="form--input">
                    <p>Pin Yin</p>
                    <input type='text'/>
                </div>
                <div className='form--input'>
                    <p>Tone</p>
                    <input type='text'/>
                </div>
            </form>
            <button className="btn btn-secondary" onClick={handleHint}>Hint</button>
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
    )
}