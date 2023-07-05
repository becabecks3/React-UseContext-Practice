import React from "react";
import './Form.css'

const Form = ({ updateUserData }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

   const newUserData = {
    name: event.target.name.value,
    email: event.target.email.value,
    url: event.target.url.value,
    age: event.target.age.value
   }

   updateUserData(newUserData);
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
        <input type="text" name="name" placeholder="Name"/>
        <input type="email" name="email" placeholder="Email"/>
        <input type="url" name="url" placeholder="www.example.com/img.jpg"/>
        <input type="number" name="age" placeholder="Age"/>
        <button type="submit">Submit</button>
    </form>
  )
};

export default Form;
