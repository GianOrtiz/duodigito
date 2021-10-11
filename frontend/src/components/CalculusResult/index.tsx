import React from 'react';
import './index.css';

export interface Props {
    elapsedTime: number;
    result: number;
}

const CalculusResult = (props: Props): JSX.Element => {
    const { elapsedTime, result } = props;

    return (
        <div className="result">
            <span className="result-value">
                {result}
            </span>
            <span className="elapsed-time">
                Tempo decorrido: {elapsedTime}ms
            </span>
        </div>
    );
};

export default CalculusResult;
