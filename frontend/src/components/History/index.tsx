import React from 'react';
import './index.css';
import { DuodigitResult } from '../../client/duodigitResult';

export interface Props {
    values: Array<DuodigitResult>;
}

const History = (props: Props): JSX.Element => {
    const { values } = props;

    return (
        <div className="history">
            <header className="history-header">Histórico</header>
            {values.map<JSX.Element>(
                (value, index) =>
                    <div
                        className="history-entry"
                        id={index.toString()}
                    >
                        <div className="input-history">{value.input}</div>
                        <div
                            className="time-history"
                        >
                            {value.elapsedTimeMillis}ms
                        </div>
                        <div className="result-history">{value.result}</div>
                    </div>
            )}
        </div>
    );
}

export default History;
