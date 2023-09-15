import Card from '../components/Card';
import Score from '../components/Score';
import {Link, useLocation} from "react-router-dom";
import characters from '../characters.ts'


export default function Play() {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)

    const level = parseInt(queryParams.get('level')!, 10)
    const levelChars = characters[level-1]
    
    console.log(levelChars[0])

    return (
        <body>
            <Card charDict={levelChars[0]}/>
            <Score/>
            <Link to={'/chinese-flashcards'} className="btn btn-danger">Home</Link>
        </body>
    )
}