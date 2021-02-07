import React, {useEffect, useState} from 'react';

export default function Mount() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    alert('Chamado ao montar o componente')
  },[]);

  return (
    <div>
      <h3>Componente Mount</h3>
      <button onClick={() => setCount(count + 1)}>Contador {count}</button>
    </div>
  )
}