import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import auth from './firebase';
import './Login.css';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newemail, setNewemail] = useState('');
  const [newpassword, setNewpassword] = useState('');

  const login = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/');
      })
      .catch((event) => alert(event.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(newemail, newpassword)
      .then(() => {
        history.push('/');
      })
      .catch((event) => alert(event.message));
  };

  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__row">
          <form className="login__flex">
            <h5>Bestaande klanten</h5>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className="login__input" type="text" placeholder="E-mailadres" />
            <input onChange={(e) => setPassword(e.target.value)} value={password} className="login__input" type="password" placeholder="Wachtwoord" />
            <div className="login__btns">
              <button
                type="submit"
                onClick={login}
                className="login__btnInloggen"
              >
                Inloggen
              </button>
              <button
                type="button"
                className="login__wachtwoordVergeten"
              >
                Wachtwoord vergeten?
              </button>
            </div>
          </form>

          <hr className="login__hr" />
          <form className="login__flex">
            <h5>Nieuw bij bol.com?</h5>
            <input onChange={(e) => setNewemail(e.target.value)} value={newemail} className="login__input" type="text" placeholder="E-mailadres" />
            <input onChange={(e) => setNewpassword(e.target.value)} value={newpassword} className="login__input" type="password" placeholder="Wachtwoord" />
            <div className="login__btns">
              <button 
                type="submit"
                onClick={register}
                className="login__btnInloggen"
              >
                Maak een account aan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
