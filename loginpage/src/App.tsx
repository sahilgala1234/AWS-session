import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm.tsx';
import LoginForm from './components/LoginForm.tsx';
import "./App.css"
const App: React.FC = () => {
  const [currentForm, setCurrentForm] = useState<'signup' | 'login'>('signup');

  return (
    <div style={{ padding: '20px' }}>
      <h1>React App with Formik</h1>
      <div>
        <button onClick={() => setCurrentForm('signup')} style={{marginRight: '10px'}}>Sign Up</button>
        
        <button onClick={() => setCurrentForm('login')}>Login</button>
      </div>
      {currentForm === 'signup' ? <SignUpForm /> : <LoginForm />}
    </div>
  );
};

export default App;
