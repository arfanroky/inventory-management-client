import React from 'react';

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const userCredential = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(userCredential);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Name">Name</label>
        <input type="text" name="name" id="" />
      </div>
      <div>
        <label htmlFor="Email">Email</label>
        <input type="email" name="email" id="" />
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input type="password" name="password" id="" />
      </div>

      <input type="submit" value="Signup" />
    </form>
    </div>
  );
};

export default Signup;
