import React, {useState} from 'react';
import UseState from './UseState';
import UseEffect from './UseEffect';

export default function Home() {
  const [showUseState, setShowUseState] = useState(true);

  console.log('Home');
  return (
    <>
      <h1>Página principal</h1>
      <div>
        <button onClick={() => setShowUseState(true)}>UseState</button>
        <button onClick={() => setShowUseState(false)}>UseEffect</button>
      </div>
      {showUseState ? <UseState /> : <UseEffect />}
    </>
  )
}