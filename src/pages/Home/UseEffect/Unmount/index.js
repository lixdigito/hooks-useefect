import React, {useEffect, useState} from 'react';

export default function Unmount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    return () => alert('Chamado ao desmontar o componente')
  },[])
  
  return (
    <div>
      <h3>Componente Unmount</h3>
      <button onClick={() => setCount(count + 1)}>Contador {count}</button>
    </div>
  )
}