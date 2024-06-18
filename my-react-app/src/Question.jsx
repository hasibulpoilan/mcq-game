import React from 'react';

function Question({ question, options, handleAnswer }) {
    return (
        <div>
            <h2>{question}</h2>
            {options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(index)}>
                    {option}
                </button>
            ))}
        </div>
    );
}

export default Question;