import Card from '../components/Card';
import Score from '../components/Score';
import {Link} from "react-router-dom";

export default function Play() {
    return (
        <body>
            <Card/>
            <Score/>
            <Link to={'/chinese-flashcards'} className="btn btn-danger">Home</Link>
        </body>
    )
}