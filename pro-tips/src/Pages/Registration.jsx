import React from "react";

const Register = () => {
  const initState = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
  };
  const alertState = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
  };
  const focusState = {
    firstName: false,
    lastName: false,
    email: false,
    contact: false,
  };

  const [data, setFormdata] = React.useState(initState);
  const [alert, setAlert] = React.useState(alertState);
  const [focus, setFocus] = React.useState(focusState);
  const [registationSuccess, setRegistrationSuccess] = React.useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setFormdata((prevData) => ({ ...prevData, [name]: value }));
  }
  function handleFocus(name) {
    setFocus((prevFocusData) => ({ ...prevFocusData, [name]: true }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    let messageBox = {};

    if (data.firstName === "") {
      messageBox.firstName = "Enter your first Name";
    } else {
      messageBox.firstName = "";
    }

    if (data.lastName === "") {
        messageBox.lastName = "Enter your last Name";
      } else {
        messageBox.lastName = "";
      }

      if (data.email === "") {
        messageBox.email = "Enter your email";
      } else {
        messageBox.email = "";
      }

      if (data.contact === "") {
        messageBox.contact = "Enter your Contact number";
      } else {
        messageBox.contact = "";
      }

      setAlert(messageBox);
      if(messageBox.firstName=='' && messageBox.lastName=="" && messageBox.email==''&& messageBox.contact==''){
        setRegistrationSuccess(true)
      }
  }
  

  return (
    <div className="App">
      <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
            onFocus={() => handleFocus("firstName")}
            placeholder="Enter your first name"
            style={{ borderColor: focus.firstName ? "red" : "#ccc" }}
          />
          <div className="alert">{alert.firstName}</div>
        </label>
        <label htmlFor="">
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
            onFocus={() => handleFocus("lastName")}
            placeholder="Enter your last name"
            style={{ borderColor: focus.lastName ? "red" : "#ccc" }}
          />
          <div className="alert">{alert.lastName}</div>
        </label>
        <label htmlFor="">
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            onFocus={() => handleFocus("email")}
            placeholder="Enter your email"
            style={{ borderColor: focus.email ? "red" : "#ccc" }}
          />
          <div className="alert">{alert.email}</div>
        </label>
        <label htmlFor="">
          <input
            type="tel"
            name="contact"
            value={data.contact}
            onChange={handleChange}
            onFocus={() => handleFocus("contact")}
            placeholder="Enter your conatct number"
            style={{ borderColor: focus.contact ? "red" : "#ccc" }}
          />
          <div className="alert">{alert.contact}</div>
        </label>
        <button> Register </button>
      </form>
      <div className="register">
        {registationSuccess && (<div>Register Successfull</div>)}
      </div>
      </div>
    </div>
  );
}

export default Register;