import React from 'react';
import './index.css';

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
        <form onSubmit={onSubmit} className="calculus-form">
            <label htmlFor="number">Valor</label>
            <input
                type="number"
                name="number"
                value={num}
                onChange={onChange}
                className={error ? "value-input-error" : "value-input"}
            />
            {error && <div className="input-error">{error}</div>}
            <button
                type="submit"
                disabled={loading}
                className="button-form"
                aria-describedby="Realiza o cálculo"        
            >
                {loading ? 'Carregando' : 'Calcular'}
            </button>
        </form>
    );
};

export default CalculusForm;