import {Link} from "react-router-dom";

export default function Congratulations() {
    return (
        <div>
            <h1>Congratulations!</h1>
            <Link to={'/chinese-flashcards'} className="btn btn-danger">Home</Link>
            <footer>Retry the topic, or choose another!</footer>
        </div>
    )
}