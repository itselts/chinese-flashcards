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
        marginRight: "10px"
        };

    // State to keep track of the count
    const [count, setCount] = useState(1);

    function handleClick() {
        const newCount = count === 9 ? 1 : count + 1
        setCount(newCount)
    };

    function handleReset() {
        setCount(1)
    };

    return (
        <>
            <button type="button" onClick={handleClick} className="btn btn-primary"> Level {count} </button>
            <button type="button" onClick={handleReset} className="btn btn-secondary"> Reset </button>
        </>
    );
}

export default LevelUpButton
