import React from "react";


import { BrowserRouter as Router,  Routes, Route,  Link } from "react-router-dom";

import Edit from "./pages/Edit/edit";
import Feed from "./pages/Feed/feed";
import LerMais from "./pages/LerMais/lermais";
import Post from "./pages/Post/post";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/"element={ <Feed />} />
          <Route path="/feed" element={ <Feed />} />
          <Route path="/post" element={ <Post />} />
          <Route path="/edit" element={ <Edit />} />
          <Route path="/lermais" element={ <LerMais />} />

        </Routes>
      </Router>
  );
}

export default App;
