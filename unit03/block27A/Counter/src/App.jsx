import { useState } from 'react'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>The current count is { count }</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Counter;
