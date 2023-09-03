import '../styles.css'

export default function Card() {
    return (
        <div style={{width: "20rem"}}>
            <div className="card-body">
                <h5 className="card-title">CHINESE WORD</h5>
                <form className="form">
                    <div className="form--input">
                        <p>Pin Yin</p>
                        <input type='text' />
                    </div>
                    <div className='form--input'>
                        <p>Tone</p>
                        <input type='text' />
                    </div>
                </form>
                <a href="" className="btn btn-primary">Submit</a>
            </div>
        </div>
    )
}