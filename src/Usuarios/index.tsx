import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import axios from 'axios';

const Usuarios = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(resposta => dispatch({ type: 'GET_USUARIOS', payload: resposta.data}))
  }, [])

  return (
    <div>
    </div>
  );
}

export default Usuarios;