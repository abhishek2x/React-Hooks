import React from "react";
import useInput from "../hooks/useInput";


function UserForm() {
  const [firstname, bindFastname, resetFirstName] = useInput('')
  const [lastname, bindLastname, resetLastName] = useInput('')

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstname} ${lastname}`);
    resetFirstName()
    resetLastName()
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label type="text">First Name</label>
          <input
            {...bindFastname}
            type="text"
          />
        </div>
        <div>
          <label type="text">Last Name</label>
          <input
            {...bindLastname}
            type="text"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
