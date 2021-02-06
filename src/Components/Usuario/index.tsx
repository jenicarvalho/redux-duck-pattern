import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';

import { getUsuario } from '../../store/ducks/usuarios/actions'

const Usuario = () => {

  const dispatch = useDispatch()

  const { name, username, email } = useSelector((state: any) => state.usuario)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/1")
      .then(resposta => dispatch(getUsuario(resposta.data)))
  }, [])

  return (
    <div className="user">
        <p>Nome do meu usuário: {name}</p>
        <p>Username do meu usuário: {username}</p>
        <p>Email do meu usuário: {email}</p>
    </div>
  );
}

export default Usuario;