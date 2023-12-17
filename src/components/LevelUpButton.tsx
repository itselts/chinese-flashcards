interface LevelUpButtonProps {
    count: number
    handleLeft: () => void
    handleRight: () => void;
}

export default function LevelUpButton({handleLeft, handleRight}: LevelUpButtonProps) {
    return (
        <div className="btn-group">
            <button type="button" onClick={handleLeft} className="btn btn-primary"> {"\u2190"} </button>
            <button type="button" onClick={handleRight} className="btn btn-primary"> {"\u2192"} </button>
        </div>
    );
}

