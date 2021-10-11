import React from 'react';

import { DuodigitResult } from '../../client/duodigitResult';

export interface Props {
    values: Array<DuodigitResult>;
}

const History = (props: Props): JSX.Element => {
    const { values } = props;

    return (
        <div>
            {values.map<JSX.Element>(
                (value, index) => <div id={index.toString()}>{value.result}</div>)
            }
        </div>
    );
}

export default History;
