import React, { useState } from "react";

const EditFriend = ({ friend, editFriend }) => {
  const [editedFriend, setEditedFriend] = useState({
    name: friend.name,
    lastname: friend.lastname,
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setEditedFriend({ ...editedFriend, [name]: value });
  };

  const save = () => {
    editFriend(friend.id, editedFriend);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={editedFriend.name}
        onChange={onChange}
      />
      <input
        type="text"
        name="lastname"
        value={editedFriend.lastname}
        onChange={onChange}
      />
      <button onClick={save}>Save</button>
    </div>
  );
};

export default EditFriend;