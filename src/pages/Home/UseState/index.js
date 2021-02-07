import React, {useState} from 'react';

export default function UseState() {
  const [countUseState, setCountUseState] = useState(0);
  let countLet = 0;

  console.log(`function UseState, countUseState: ${countUseState}, countLet: ${countLet} `);

  const handleCountLet = () => {
    countLet = countLet + 1
    console.log('countLet', countLet);
  }

  return (
    <>
      <h2>UseState</h2>
      <button onClick={() => setCountUseState(countUseState + 1)} >contador useState {countUseState}</button>
      <button onClick={() => handleCountLet()} >contador useState {countLet}</button>
    </>
  )

}