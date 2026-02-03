import React, { createContext, useState } from 'react'

export const FormDataContext = createContext();

const FormContext = (props) => {
   const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Logging in..." : "Registering...", formData);
  };
  return (
    <div>
        <FormDataContext.Provider value={[isLogin, setIsLogin, handleChange, handleSubmit]}>
            {props.children};
        </FormDataContext.Provider>
    </div>
  )
}

export default FormContext
