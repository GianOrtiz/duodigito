import React from 'react';

export interface Props {
    elapsedTime: number;
    result: number;
}

const CalculusResult = (props: Props): JSX.Element => {
    const { elapsedTime, result } = props;

    return (
        <div>
            <p>Tempo decorrido: {elapsedTime}ms</p>
            <p>Resultado: {result}</p>
        </div>
    );
};

export default CalculusResult;
