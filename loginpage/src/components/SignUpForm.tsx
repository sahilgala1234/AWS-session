import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignUpForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const passwordStrength = (password: string): string => {
    if (!password) return '';
    if (password.length < 6) return 'Weak';
    if (password.match(/(?=.*[0-9])(?=.*[!@#$%^&*])/)) return 'Strong';
    return 'Medium';
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string()
        .min(6, 'Must be 6 characters or more')
        .required('Required'),
    }),
    onSubmit: (values) => {
      setSuccessMessage('Sign Up Successful');
    },
  });

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <br></br>
          <input
            id="email"
            type="email"
            {...formik.getFieldProps('email')}
            aria-describedby="emailError"
          />
          {formik.touched.email && formik.errors.email ? (
            <div id="emailError" style={{color:"red"}} >*{formik.errors.email}</div>
          ) : null}
        </div>
        <br></br>
        <div>
          <label htmlFor="password">Password</label>
          <br></br>
          <input
            id="password"
            type="password"
            {...formik.getFieldProps('password')}
            aria-describedby="passwordError"
          />
          {formik.touched.password && formik.errors.password ? (
            <div id="passwordError" style={{color:"red"}} >*{formik.errors.password}</div>
          ) : null}
          <br></br>
          <br></br>
          <h4>Password Strength: <span style={{color: "red"}}> {passwordStrength(formik.values.password)}</span></h4>
        </div>
        <br></br>
        <br></br>
        <button type="submit">Sign Up</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default SignUpForm;
