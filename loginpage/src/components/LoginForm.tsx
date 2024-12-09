import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      setSuccessMessage('Login Successful');
      if (values.rememberMe) {
        localStorage.setItem('email', values.email);
      }
    },
  });

  return (
    <div>
      <h2>Login</h2>
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
          </div>
        <br></br>
        <div>
          <label>
            <input
              type="checkbox"
              {...formik.getFieldProps('rememberMe')}
              aria-label="Remember Me"
            />
            Remember Me
          </label>
        </div>
         <br></br>
        <button type="submit">Login</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default LoginForm;
