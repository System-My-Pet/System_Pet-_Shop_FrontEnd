import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useHistory, useParams } from 'react-router-dom';

import Header from '../../components/Header';
import './styles.css';
import { Api } from '../../services/api';

export default function Register(props) {
  const [attendance, setAttedance] = useState(null);
  const { register, handleSubmit, setValue } = useForm();
  const history = useHistory();
  let { id } = useParams();
  const [ dataDeEntrada, setdataDeEntrada ] = useState(null);
  const [ dataDeSaida, setdataDeSaida ] = useState(null);
  useEffect(() => {
    
    const _id = id; 
    if(_id){

      (async function req() {
        const attend = await Api.get(`getAtendimentosById/${_id}`);
        setAttedance(attend.data)  
       
      }())

    }
    
  }, [id])  

  useEffect(() => {

    if(id){
      
      if(attendance){
        console.log(attendance);
        setdataDeEntrada(attendance.dataDeEntrada);
        setdataDeSaida(attendance.dataDeSaida);
        getDados();
      }
    }
    
       
   
  }, [attendance])

  
  const onSubmit = data => {
    if(id){
     data["_id"] = id;
     data["dataDeEntrada"]= dataDeEntrada;
     data["dataDeSaida"]= dataDeSaida;
     
      Api
      .put(
          'update',
          data,
          { headers: { 'Content-Type': 'application/json' }}
       )
      .then(response => {
        notify(toast.success('Atendimento atualizado com sucesso.'));
        setTimeout(() =>{
          return history.push('/');
        }, 1500);
      })
      .catch(error => {notify(toast.success('Erro ao atualizar atendimento.'));});
    }else{
      Api
     .post(
         'cadastroAtendimento',
         data,
         { headers: { 'Content-Type': 'application/json' }}
      )
     .then(response => {
      notify(toast.success('Atendimento criado com sucesso.'));
      setTimeout(() =>{
        return history.push('/');
      }, 1500);
     })
     .catch(error => {notify(toast.error('Erro ao criar atendimento.'));});
 };
    }
    
    const notify = (message) => message;

  const getDados = () => {
    setValue("especie", attendance.especie, {
      shouldValidate: true,
      shouldDirty: true
    })    
    setValue("status", attendance.status, {
      shouldValidate: true,
      shouldDirty: true
    })
    setValue("nomeDono", attendance.nomeDono, {
      shouldValidate: true,
      shouldDirty: true
    })
    setValue("cpf", attendance.cpf, {
      shouldValidate: true,
      shouldDirty: true
    })
    setValue("email", attendance.email, {
      shouldValidate: true,
      shouldDirty: true
    })
    setValue("numero", attendance.numero, {
      shouldValidate: true,
      shouldDirty: true
    })
  }

  return (
    <div className="register"> 
      <Header />
      <div className="content">
        <div className="homeButton">
          <Link className="goHome" to="/">&lt; Voltar</Link>
        </div>
        <h2>Animal e Leito</h2>
        <div className="registerBed">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("especie")} type="text" placeholder="Especie" name="especie" id="especie" required />
            <input {...register("status")} type="text" placeholder="Status" name="status" id="status" required /><br />
            
        <hr className="divisor" />
        <h2>Dono</h2>

            <input {...register("nomeDono")} type="text" placeholder="Nome" name="nomeDono" id="nomeDono" required></input>
            <input {...register("cpf")} type="text" placeholder="CPF" name="cpf" id="cpf" className="cpf" required></input>
            
            <input {...register("email")} type="text" placeholder="E-mail" name="email" id="email" required></input>
            <input {...register("numero")} type="text" placeholder="Número" name="numero" id="numero" required></input><br />
            <input type="submit" id='btnAction'  className="confirmBed" value={"Salvar"}/>
          </form>
        </div>
        
        
      </div>
      <ToastContainer />
    </div>
  )
};