import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EmptyPage from './EmptyPage';

const DeleteFriend = ({ id, deleteFriend }) => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/empty">Empty Page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<button onClick={() => deleteFriend(id)}>Delete</button>} />
        <Route path="/empty" element={<EmptyPage />} />
      </Routes>
    </Router>
  );
};

export default DeleteFriend;
