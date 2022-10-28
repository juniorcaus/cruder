import React from 'react'
import './post.css';

import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

import { useForm } from 'react-hook-form';

function Post() {

  const { register, handleSubmit, formState: {erros} } = useForm()
  const addPost = data => console.log(data);

  return (
    <div>
      <Header/>

      <main>

        <div className="card-post" > 
          <h1>Criar postagem</h1>
          <div className="line-post" ></div>

          <div className="card-body-post" >

            <form onSubmit={handleSubmit(addPost)} >

              <div className="fields" >
                <label>Título</label>
                <input type="text"  name="title" {...register("title")} />
              </div>

              <div className="fields" >
                <label>Descrição</label>
                <input type="text" name="description" {...register("description")} />
              </div>

              <div className="fields" >
                <label>Conteudo</label>
                <textarea type="text" name="content" {...register("content")} ></textarea>
              </div>

              <div className="btn-post" >
                <button type="submit" >Enviar</button>
              </div>

            </form>

          </div>

        </div>

      </main>
      



    </div>
  )
}

export default Post;