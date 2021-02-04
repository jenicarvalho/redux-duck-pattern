import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'

const Post  = () => {

  const dispatch = useDispatch()

  const titulo = useSelector((state: any) => state.post.title)
  const body = useSelector((state: any) => state.post.body)


  const buscaPost = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then(resposta => dispatch({ type: "GET_POST", payload: resposta.data}))
  }


  return (
    <div>
      <h1>{titulo}</h1>
      <p>{body}</p>

      <button onClick={buscaPost}>buscar post</button>
    </div>
  );
}

export default Post;