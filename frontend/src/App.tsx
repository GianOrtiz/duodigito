import React, { useState, useEffect } from 'react';
import './App.css';
import fetchDuodigit from './client/client';
import { DuodigitResult } from './client/duodigitResult';
import CalculusForm from './components/CalculusForm';
import History from './components/History';
import CalculusResult from './components/CalculusResult';

function App() {
  const [num, setNum] = useState(0);
  const [numError, setNumError] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DuodigitResult | undefined>();
  const [history, setHistory] = useState<Array<DuodigitResult>>([]);

  useEffect(() => {
    const value = localStorage.getItem('history');
    if (value) {
      setHistory(JSON.parse(value) as Array<DuodigitResult>);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history));
  }, [history]);

  const onChangeNum = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const value = Number.parseInt(event.target.value);
      setNum(value);
    } catch {
      setNumError('Este valor deve ser um número inteiro!');
    }
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setNumError('');

    if (num < 100) {
      setNumError('Valor deve ser maior que 100!');
      return;
    }

    setResult(undefined);
    setLoading(true);
    try {
      const res = await fetchDuodigit(num);
      setResult(res);
      if (res) {
        setHistory([
          res,
          ...history,
        ]);
      }
    } catch {
      setNumError('Algo deu errado, tente novamente!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="calculus-container">
        <header className="calculus-header">
          <h2>Cálculo de menor múltiplo duodígito</h2>
          <p>Esta ferramenta permite descobrir o menor múltiplo do número dado que é duodígito. Divirta-se!</p>
        </header>
        <div className="form-container">
          <CalculusForm
            num={num}
            error={numError}
            onChange={onChangeNum}
            onSubmit={onSubmit}
            loading={loading}
          />
        </div>
        {result && (
          <div className="result-container">
            <h2>Resultado:</h2>
            <CalculusResult
              elapsedTime={result.elapsedTimeMillis}
              result={result.result}
            />
          </div>
        )}
      </div>
      <div className="history-container">
        <History
          values={history}
        />
      </div>
    </div>
  );
}

export default App;
