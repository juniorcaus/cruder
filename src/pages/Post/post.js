import React from 'react'
import './post.css';

import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validationPost = yup.object().shape({
    title:  yup.string().required("O titulo é obrigatório").max(10, "Máximo 10 caracteres") ,
    description: yup.string().required("A descrição é obrigatória").max(100, "Máximo 100 caracteres"), 
    content: yup.string().required("O conteudo é obrigatório").max(500, "Máximo 500 caracteres")
  })

function Post() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationPost)
  })
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
                <p className="error-message">{errors.title?.message}</p>
              </div>

              <div className="fields" >
                <label>Descrição</label>
                <input type="text" name="description" {...register("description")} />
                <p className="error-message">{errors.description?.message}</p>
              </div>

              <div className="fields" >
                <label>Conteudo</label>
                <textarea type="text" name="content" {...register("content")} ></textarea>
                <p className="error-message">{errors.content?.message}</p>
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