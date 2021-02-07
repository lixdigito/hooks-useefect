import React, {useState} from 'react';
import Mount from './Mount';
import Unmount from './Unmount';
import ListeningState from './ListeningState';
import AsyncAwait from './AsyncWait';

export default function UseEffect() {
  const [mountState, setMountState] = useState(false);
  const [unmountState, setUnmountState] = useState(false);
  const [listeningState, setListeningState] = useState(false);
  const [asyncAwaitState, setAsyncAwaitState] = useState(false);

  return (
    <div>
      <h2>UseEffect</h2>
      <div>
        <button onClick={() => setMountState(!mountState)}>Mount</button>
        <button onClick={() => setUnmountState(!unmountState)}>Unmount</button>
        <button onClick={() => setListeningState(!listeningState)}>ListeningState</button>
        <button onClick={() => setAsyncAwaitState(!asyncAwaitState)}>AsyncAwait</button>
      </div>
      {mountState && <Mount />}
      {unmountState && <Unmount />}
      {listeningState && <ListeningState />}
      {asyncAwaitState && <AsyncAwait />}
    </div>
    )
}