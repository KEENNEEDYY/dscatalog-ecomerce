import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';
import './styles.css';

const Login = () => {
  return (
    <div className="base-card login-card">
      <h1>Login</h1>
      <form>
        <div className="mb-4">
          <input
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
        </div>
        <div className="mb-2">
          <input 
            type="text" 
            className="form-control base-input" 
            placeholder="Password"
            name="password"/>
        </div>
        <Link to="/auth/recover" className="login-link-recover">
            Esqueci a senha
        </Link>
        <div className="login-submit">
            <ButtonIcon text="Fazer login"/>
        </div>
        <div className="signup-container">
            <span className="not-registred">Não tem Cadastro?</span>
            <Link to="/auth/register" className="login-link-register">
                CADASTRAR
            </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
