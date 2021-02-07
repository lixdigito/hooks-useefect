import React, {useEffect} from 'react';
import {GetUserGit} from '../../../../Repository/ApiGit';

export default function AsyncAwait() {
  
  async function callAsync(name) {
    const response = await GetUserGit(name);
    console.log(response);
  }


  useEffect(() => {
    callAsync('react');
  },[]);

  return (
    <div>
      <h3>Componente AsyncWait</h3>      
    </div>
  )

}