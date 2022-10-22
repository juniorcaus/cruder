import React from 'react'

import { Link } from 'react-router-dom';

function Feed() {
  return (
    <div>
    <h1>PAGINA FEED</h1>

          <Link to="/post" >
            <button>Add New Post</button>
          
          </Link>
    

    </div>
  )
}

export default Feed;