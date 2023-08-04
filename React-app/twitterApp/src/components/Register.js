import { useState } from "react";

function Register() {
  const [detail, setDetail] = useState({
    firstName: "Chirag",
    lastName: "Goel",
    email: "connectlearnwithchirag@gmail.com",
    contact: "99999999999",
  });

  const handleChange = (key) => (event) => {
    const newDetails = { ...detail };
    newDetails[key] = event.target.value;
    setDetail(newDetails);
  }

//   const handleFirstNameChange = (event) => {
//     console.log(event.target.value);
//     const newDetails = { ...detail };
//     newDetails.firstName = event.target.value;
//     setDetail(newDetails);
//   }

//   const handleLastNameChange = (event) => {
//     const newDetails = { ...detail };
//     newDetails.lastName = event.target.value;
//     setDetail(newDetails);
//   }

//   const handleEmailChange = (event) => {
//     const newDetails = { ...detail };
//     newDetails.email = event.target.value;
//     setDetail(newDetails);
//   }

//   const handleContactChange = (event) => {
//     const newDetails = { ...detail };
//     newDetails.contact = event.target.value;
//     setDetail(newDetails);
//   }

  const handleSubmit = (event) => {
    event.stopPropagation();
    console.log(detail);
  }

  return (
    <div>
      <h2>Registration Form</h2>
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={detail.firstName}
          placeholder="Enter First Name"
          onChange={handleChange('firstName')}
        //   onChange={handleFirstNameChange}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={detail.lastName}
          placeholder="Enter Last Name"
          onChange={handleChange('lastName')}
        //   onChange={handleLastNameChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input type="text" value={detail.email} placeholder="Enter Email" 
            onChange={handleChange('email')}
            // onChange={handleEmailChange}
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          type="number"
          value={detail.contact}
          placeholder="Enter Contact Number"
          onChange={handleChange('contact')}
        //   onChange={handleContactChange}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
}

export default Register;
