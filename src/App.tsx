import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <h1>Bolt Starter</h1>
      <p>Vite + React + TypeScript работает. Измените <code>src/App.tsx</code>, чтобы начать.</p>
      <button onClick={() => setCount(c => c + 1)}>Счётчик: {count}</button>
    </main>
  );
}
