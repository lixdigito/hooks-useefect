import React, {useState, useEffect} from 'react';

export default function ListeningState() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('ListeningState contador 1')
  }, [count1]);

  return (
    <div>
      <h3>Componente ListeningState</h3>
    <button onClick={() => setCount1(count1 + 1)}>Contador 1 : {count1}</button>
    <button onClick={() => setCount2(count2 + 1)}>Contador 2 : {count2}</button>
    </div>
  )
}