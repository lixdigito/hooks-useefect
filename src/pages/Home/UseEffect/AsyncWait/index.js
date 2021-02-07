import React, {useEffect, useState} from 'react';
import {GetUserGit} from '../../../../Repository/ApiGit';

export default function AsyncAwait() {
  const [urlAvatar, setUrlAvatar] = useState('');
  const [inputName, setInputName] = useState('');
  
  async function callAsync(name) {
    try {
      const response = await GetUserGit(name);    
      console.log(response);
      const url = response.data.avatar_url;
      setUrlAvatar(url);  
    } catch {
      alert('Erro ao buscar os dados.');
    }    
  }


  useEffect(() => {
    if (inputName) {
      callAsync(inputName);
    }    
  },[inputName]);

  return (
    <div>
      <h3>Componente AsyncWait</h3> 
      <div>
        <input
          type="text" 
          placeholder="Nome:"
          onBlur={e => setInputName(e.target.value)}
        />
      </div>     
      <img src={urlAvatar} />     
    </div>
  )

}