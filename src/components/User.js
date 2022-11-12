import React from "react";
import "./User.css";
import { AiFillPushpin } from "react-icons/ai";
import { BsJournalText } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
const User = ({ firstName, lastName, message, selectAge, addUsers, users, deleteUser, editForm }) => {
  return (
    <div className="users">
      <div className="users__header">
        <div className="users__header-left">
          <AiFillPushpin />
          <h5>Keywords</h5>
        </div>
        <div className="users__header-right">
          <button className="" onClick={addUsers}>
            <BsJournalText />
            Add Keyword
          </button>
        </div>
      </div>

      <div className="users__line"></div>

      <div className="users__details">
        
        {users &&
          users.map((user) => (
            <div className="users__details-desc" key={user.id} onClick={() => editForm(user.id)}>
              <div>
                <h5>{user.formData.firstName ? `Key: ${user.formData.firstName} ${user.formData.lastName}`: ""}</h5>
                <p>{user.formData.message ? `Message: ${user.formData.message}` :""}</p>
                <p>{user.formData.gender==="female" ? `Age: ${selectAge}`:""}</p>
              </div>
              <button onClick={() => deleteUser(user.id)}>
                <MdDelete />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default User;
