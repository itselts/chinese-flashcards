import { useState } from 'react';

const LevelUpButton = () => {

    // State to keep track of the count
    const [count, setCount] = useState(1);

    function handleClick() {
        const newCount = count === 5 ? 1 : count + 1
        setCount(newCount)
    };

    function handleReset() {
        setCount(1)
    };

    return (
        <div>
            <button type="button" onClick={handleClick} className="btn btn-primary"> Level {count} </button>
            <button type="button" onClick={handleReset} className="btn btn-secondary"> Reset </button>
        </div>
    );
}

export default LevelUpButton
