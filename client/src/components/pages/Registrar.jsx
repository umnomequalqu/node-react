import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import Popup from '../Popup'
import { TextSpace,Names,Aquele } from '../styles/styles'

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
        <Names>
            <form onSubmit={envioFormulario}>
                <label htmlFor="nome">Nome:</label><br/>
                <TextSpace 
                type ="text" 
                id ="nome" 
                value={user.name}
                onChange={(e)=>setUser({...user,name: e.target.value})}
                /><br/><br/>
                <label htmlFor="email">Email:</label><br/>
                <TextSpace 
                type ="text" 
                id ="email" 
                value={user.email}
                onChange={(e)=>setUser({...user,name: e.target.value})}
                /><br/><br/>
                <label htmlFor="idade">Idade:</label><br/>
                <TextSpace 
                type ="number" 
                id ="idade" 
                value={user.age}
                onChange={(e)=>setUser({...user,name: e.target.value})}
                /><br/>
                <br/>
                <label htmlFor="senha">Senha:</label><br/>
                <TextSpace 
                type ="password" 
                id ="senha" 
                value={user.password}
                onChange={(e)=>setUser({...user,name: e.target.value})}
                /><br/>
                <br/>
                <label htmlFor="confirmPassword">Confirme sua senha:</label><br/>
                <TextSpace 
                type ="password" 
                id ="confirmPassword" 
                value={user.confirmPassword}
                onChange={(e)=>setUser({...user,name: e.target.value})}
                /><br/><br/>
                <Aquele type='submit'>Cadastrar</Aquele>
                </form>
            {
                showCard ?<Popup/> : null
            }
            
        </Names>
    )
}

export default Registrar