import { useContext } from "react";
import { Link, useHistory } from "react-router-dom"
import StoreContext from "../../ContextApi/Store/context"
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logoVerticalWhite from '../../assets/logoVerticalWhite.svg'
import logoVerticalBlack from '../../assets/logoVerticalBlack.svg'

import "./styles.css";

export default function Login() {
  const {register, handleSubmit, reset} = useForm();
  const { setToken } = useContext(StoreContext);
  const history = useHistory();
  
  function login({user, password}) {        
    if(user === 'gibu' && password === 'gibu') {
      return { token: '1234' };
    }
    return { error: 'Úsuario ou senha invalida' }
  }    

  function onSubmit(form, event) {
    event.preventDefault();      

    const { token } = login(form);

    if(token) {          
      notify(toast.success('Login feito com sucesso'));
      setTimeout(() =>{
        setToken(token);
        return history.push('/');
      }, 1500);
    } else{
      notify(toast.error('Email ou senha incorreto'));
    }
    reset();
  }

  const notify = (message) => message;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login">
      <div className="box-left">
        <img src={logoVerticalWhite} alt="Logoo" />
      </div>
      <div className="box-right">
        <img src={logoVerticalBlack} alt="Logoo" />
        <div className="form">
          <input {...register("user")} className="form-text" placeholder="Gmail" type="text" />
          <input {...register("password")} className="form-text" placeholder="Senha" type="text" />
          <div>
            <input type="checkbox" />
            <span>Lembrar de mim</span>
          </div>          
        </div>
        <input className="button" type="submit" value="Entrar" />
        <Link to="/">Esqueceu a senha?</Link>
      </div>
      <ToastContainer />
    </form>
  )
}