interface SubtextProps{
    count: number;
}

export default function Subtext({count}: SubtextProps) {
    let message;

    if (count === 1) {
        message = "Completely new."
    } else if (count === 2) {
        message = "4 year old."
    } else if (count === 3) {
        message = "Can hold a conversation."
    } else if (count === 4) {
        message = "Respectable..."
    } else {
        message = "Parents are proud!!"
    }

    return (
        <p className="read-the-docs"> {message} </p>
    );
}

  
  
  
  
  
  
  