import React from 'react'

import { Link } from 'react-router-dom';

function Post() {
  return (
    <div>
        <h1>COMPONENT POST</h1>

          <Link to="/">
            <button>VOLTAR</button>
          </Link>
    </div>
  )
}

export default Post;