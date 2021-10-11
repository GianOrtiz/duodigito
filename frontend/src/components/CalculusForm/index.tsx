import React from 'react';

export interface Props {
    onSubmit: (event: React.FormEvent) => void;
    num: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    loading: boolean;
    error: string;
}

const CalculusForm = (props: Props): JSX.Element => {
    const { onSubmit, num, onChange, loading, error } = props;

    return (
        <form onSubmit={onSubmit}>
            <input type="number" value={num} onChange={onChange} />
            {error && <div>{error}</div>}
            <button
            type="submit"
            disabled={loading}
            >
            {loading ? 'Carregando' : 'Calcular'}
            </button>
        </form>
    );
};

export default CalculusForm;