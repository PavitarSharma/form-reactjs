import React, { useEffect, useState } from "react";
import "./Form.css";
import { RiPagesLine } from "react-icons/ri";
import User from "./User";
const Form = () => {
  const id = Math.floor(Math.random() * 10000)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    message: ""
  })
  const { firstName, lastName, gender, message } = formData
  
  const [selectAge, setSelectAge] = useState("");

  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null)

  const handleChange = (event) => {
    const { value, name } = event.target
    setFormData((state) => ({
      ...state,
      [name]:value
    }))
  }


  const handleSelectAge = (value) => {
    setSelectAge(value);
 
  };
  console.log(editUser);

  const updateUser = (formData, id) => {
    const newUser = users.map(user => {
      return user.id === id ? { id, formData } : user
    })
    setUsers(newUser);
    setEditUser("")
  }

  useEffect(() => {
    if (editUser) {
      setFormData({
        firstName: editUser.formData.firstName,
        lastName: editUser.formData.lastName,
        message: editUser.formData.message
      })
    } else {
      setFormData({
        firstName: "",
        lastName: "",
        message: "", 
        gender: ""
      })
    }
  }, [setFormData, editUser]);

  const addUsers = (event) => {
    event.preventDefault();
   if(!editUser){
    setUsers([
      ...users,
      {
        id,
        formData
      }
    ])
   }else {
    updateUser(formData, editUser.id)
   }
    setFormData({
      firstName: "",
      lastName: "",
      message: "", 
      gender: "",
      age: ""
    })
    
  };

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId))
  }

  const editForm = (userId) => {
    const findUser = users.find(user => user.id === userId);
    setEditUser(findUser)
  }

  const optionsAge = ["18", "25", "30", "50", "above 50"];
  return (
    <div className="app">
      <div className="form">
        <div className="form__header">
          <RiPagesLine />
          <h2>Keyword Properties</h2>
        </div>

        <div className="form__line"></div>

        <div className="form__inputs">
          <div className="form__input1">
            <div className="form__label">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
              />
            </div>

            <div className="form__label">
              <label htmlFor="firstName">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form__input2">
            <label htmlFor="action">Gender</label>
            <div className="form__input-gender">
              <div className="form__input-male">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  checked={gender === "male"}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="form__input-male">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  checked={gender === "female"}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>

          <div>
            {gender === "male" ? (
              <textarea
                className="message"
                name="message"
                value={message}
                onChange={handleChange}
              />
            ) : null}
          </div>

          {gender === "female" ? (
            <div className="female-card">
              {optionsAge.map((age) => (
                <div
                  className="ages"
                  onClick={() => handleSelectAge(age)}
                  key={age}
                >
                  {age}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <User
        firstName={firstName}
        lastName={lastName}
        message={message}
        selectAge={selectAge}
        addUsers={addUsers}
        users={users}
        deleteUser={deleteUser}
        editForm={editForm}
      />
    </div>
  );
};

export default Form;
