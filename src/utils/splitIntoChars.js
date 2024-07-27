const splitIntoChars = (str, term) => {
    if (!term) return str;

    const regex = new RegExp(
        `(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`,
        'gi'
    );
    const chars = str.split(regex);

    return (
        <span>
            {chars.map((char, index) =>
                regex.test(char) ? (
                    <span key={index} className="point-char">
                        {char}
                    </span>
                ) : (
                    <span key={index}>{char}</span>
                )
            )}
        </span>
    );
};

export default splitIntoChars;
