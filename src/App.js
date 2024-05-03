// App.js

import React, { useState, useEffect } from 'react';
import './App.css';

const quotes = [
  "The best way to predict the future is to create it. - Peter Drucker",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Don't let yesterday take up too much of today. - Will Rogers",
  "Believe you can and you're halfway there. - Theodore Roosevelt"
];

function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
    }, 5000); // Change the interval (in milliseconds) as desired
    return () => clearInterval(interval);
  }, []); // Run only once on component mount

  return (
    <div className="App">
      <h1 id='Q'>Daily Quote Generator</h1>
      <header className="App-header">
        <p className="quote">{quote}</p>
      </header>
    </div>
  );
}

export default App;
