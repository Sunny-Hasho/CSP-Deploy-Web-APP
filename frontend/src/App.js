import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [forecasts, setForecasts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5113/weatherforecast')
      .then(response => response.json())
      .then(data => setForecasts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
    
        <h1>Weather Forecast from .NET API</h1>
        <div style={{ textAlign: 'left', marginTop: '20px' }}>
          {forecasts.length > 0 ? (
            <ul>
              {forecasts.map((f, index) => (
                <li key={index}>
                  {f.date}: {f.temperatureC}°C ({f.summary})
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading forecasts...</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
