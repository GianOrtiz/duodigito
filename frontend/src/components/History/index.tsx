import React from 'react';
import './index.css';
import { DuodigitResult } from '../../client/duodigitResult';

export interface Props {
    values: Array<DuodigitResult>;
}

const History = (props: Props): JSX.Element => {
    const { values } = props;

    const renderEntries = () => {
        return values.map<JSX.Element>((value, index) =>
            <div
                className="history-entry"
                key={index.toString()}
            >
                <div className="input-history">{value.input}</div>
                <div
                    className="time-history"
                >
                    {value.elapsedTimeMillis}ms
                </div>
                <div className="result-history">{value.result}</div>
            </div>
        );
    }

    return (
        <div className="history">
            <header className="history-header">Histórico</header>
            {values.length > 0
                ? renderEntries()
                : (
                    <span className="empty-history">
                        Nenhum cálculo no histórico
                    </span>
                )
            }
        </div>
    );
}

export default History;
