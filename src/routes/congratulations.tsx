import {Link} from "react-router-dom";

export default function Congratulations() {
    return (
        <div>
            <h1>Congratulations!</h1>
            <Link to={'/chinese-flashcards'} className="btn btn-danger">Home</Link>
            <footer>When you return to the home page, refresh the browser if you want to replay the same level... (Bug to be fixed)</footer>
        </div>
    )
}