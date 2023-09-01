import {Link} from "react-router-dom";

interface PlayButtonProps {
    Level: string; // Specify that the Level prop is a string
  }

export default function PlayButton({Level}: PlayButtonProps) {
    return (
        <Link to={`/chinese-flashcards/play/${Level}`}>
            <button type="button" className="btn btn-danger" style={{marginTop: '10px'}}>Play</button>
        </Link>
        
    )
}