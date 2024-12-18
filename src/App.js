import React, { Component, useState } from 'react';
import AddFriend from './AddFriend';
import EditFriend from "./EditFriend";
import DeleteFriend from "./DeleteFriend";

const Friends = () => {
  const [friends, updateFriends] = useState([
    {
      id: 1,
      name: 'Mark',
      lastname: 'Stark',
    },
    {
      id: 2,
      name: 'John',
      lastname: 'Bily',
    },
  ]);

  const addFriend = (friend) => {
    updateFriends([
      ...friends,
      { id: friends.length + 1, name: friend.name, lastname: friend.lastname },
    ]);
  };

  const deleteFriend = (id) => {
    updateFriends(friends.filter((friend) => friend.id !== id));
  };

  const editFriend = (id, updatedFriend) => {
    updateFriends(
      friends.map((friend) => (friend.id === id ? { ...friend, ...updatedFriend } : friend))
    );
  };

  return (
    <div>
      {friends.map((friend) => (
        <div key={friend.id}>
        <p>
          {friend.id} {friend.name} {friend.lastname}
        </p>
        <EditFriend friend={friend} editFriend={editFriend} />
        <DeleteFriend id={friend.id} deleteFriend={deleteFriend} />
      </div>
      ))}
      <AddFriend addFriend={addFriend} />
    </div>
  );
};

export default Friends;