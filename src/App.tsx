import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class='flex flex-col items-center justify-center h-[100vh]'>
      <div>Vite React {count}</div>
      <button
        class='btn btn-primary'
        type='button'
        onClick={() => setCount(count + 1)}
      >
        Add
      </button>
    </div>
  )
}

export default App
