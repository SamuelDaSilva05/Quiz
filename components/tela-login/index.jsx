import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css'; // Certifique-se de criar um arquivo CSS para estilizar a tela

const Login = () => {
  return (
    <div className="login-container">
      <div className="user-icon"></div>
      <form className="login-form">
        <input type="email" placeholder="EMAIL" className="login-input" />
        <input type="password" placeholder="SENHA" className="login-input" />
        <button type="submit" className="login-button">ENTRAR</button>
      </form>
      <a href="/register" className="register-link">FAZER CADASTRO</a>
    </div>
  );
}

export default Login;
