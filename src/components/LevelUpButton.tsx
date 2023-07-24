import { useState } from 'react';

const LevelUpButton = () => {
    // Styling
    const buttonStyle = {
        backgroundColor: "green",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        };

    // State to keep track of the count
    const [count, setCount] = useState(0);

    function handleClick() {
        const newCount = count === 9 ? 0 : count + 1
        setCount(newCount)
    }
    return <button style={buttonStyle} onClick={handleClick}> Level {count} </button>
}

export default LevelUpButton
