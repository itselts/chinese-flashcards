interface LevelUpButtonProps {
    count: number
    handleClick: () => void
    handleReset: () => void;
}

export default function LevelUpButton({count, handleClick, handleReset}: LevelUpButtonProps) {
    return (
        <div className="btn-group">
            <button type="button" onClick={handleClick} className="btn btn-primary"> Level {count} </button>
            <button type="button" onClick={handleReset} className="btn btn-secondary"> Reset </button>
        </div>
    );
}

