import '../styles.css';

interface CharDict {
    char: string;
    pinyin: string;
    tone: number;
  }
interface CardProps {
    charDict: CharDict; // Specify that the Level prop is a string
  }

export default function Card({ charDict }: CardProps) {
    const char = charDict.char
    const pinyin = charDict.pinyin
    const tone = charDict.tone

    console.log(char)
    console.log(pinyin)
    console.log(tone)

    function handleHint() {
        console.log('Hint!')
    }

    function handleSubmit() {
        console.log('Submit!')
    }

    return (
        <div className="card">
            <h1 className="card-title">{char}</h1>
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