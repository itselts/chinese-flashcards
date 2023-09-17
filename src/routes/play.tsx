import Card from '../components/Card';
import { Link } from "react-router-dom";


import {useLocation} from "react-router-dom";
import characters from '../characters.ts'

export default function Play() {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)

    const level = parseInt(queryParams.get('level')!, 10)
    const levelChars = characters[level-1]

    return (
        <>
            <Card levelChars={levelChars}/>
            <Link to={'/chinese-flashcards'} className="btn btn-danger">Home</Link>
        </>
    )
}