import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import Popup from '../Popup'

function Registrar() {
    const [user,setUser] = useState({
        name: '',
        email: '',
        age: '',
        password: '',
        confirmPassword:''
    })
    const [showCard, setShowCard] = useState(false);
    function cadastrarUsuario(){
        axios.post("http://localhost:8080/auth/register/user",user)
            .then(res=>console.log(res.data))
            .catch(erro=> console.log(erro))
    }

    function envioFormulario(event){
        event.preventDefault();
        cadastrarUsuario(user);
        setShowCard(true);
        setTimeout(()=>{
            setShowCard(false);
        },3100)
    }
    return(
        <div>
            <form onSubmit={envioFormulario}>
                <label htmlFor="nome">Nome:</label>
                <input 
                type ="text" 
                id ="nome" 
                value={user.name}
                onChange={(e)=>setUser({...user,name: e.target.value})}
                /><br/>
                <label htmlFor="email">Email:</label>
                <input 
                type ="text" 
                id ="email" 
                value={user.email}
                onChange={(e)=>setUser({...user,name: e.target.value})}
                /><br/>
                <label htmlFor="idade">Idade:</label>
                <input 
                type ="number" 
                id ="idade" 
                value={user.age}
                onChange={(e)=>setUser({...user,name: e.target.value})}
                /><br/>
                <label htmlFor="senha">Senha:</label>
                <input 
                type ="password" 
                id ="senha" 
                value={user.password}
                onChange={(e)=>setUser({...user,name: e.target.value})}
                /><br/>
                <label htmlFor="confirmPassword">Confirme sua senha:</label>
                <input 
                type ="password" 
                id ="confirmPassword" 
                value={user.confirmPassword}
                onChange={(e)=>setUser({...user,name: e.target.value})}
                /><br/>
                <button type='submit'>Cadastrar</button>
                </form>
            {
                showCard ?<Popup/> : null
            }
            
        </div>
    )
}

export default Registrar