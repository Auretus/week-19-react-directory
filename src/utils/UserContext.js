import React from 'react';

const userContext = React.createContext({
  firstName: "",
  lastName: "",
  image: "",
  phoneNumber: "",
  dob: "",
  email: "",
  id: ""
});

export default userContext;