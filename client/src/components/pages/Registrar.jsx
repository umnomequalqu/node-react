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
        <div>
            <form onSubmit={envioFormulario}>
                <Names htmlFor="nome">Nome:</Names><br/>
                <TextSpace 
                type ="text" 
                id ="nome" 
                value={user.name}
                onChange={(e)=>setUser({...user,name: e.target.value})}
                /><br/><br/>
                <Names htmlFor="email">Email:</Names><br/>
                <TextSpace 
                type ="text" 
                id ="email" 
                value={user.email}
                onChange={(e)=>setUser({...user,name: e.target.value})}
                /><br/><br/>
                <Names htmlFor="idade">Idade:</Names><br/>
                <TextSpace 
                type ="number" 
                id ="idade" 
                value={user.age}
                onChange={(e)=>setUser({...user,name: e.target.value})}
                /><br/>
                <br/>
                <Names htmlFor="senha">Senha:</Names><br/>
                <TextSpace 
                type ="password" 
                id ="senha" 
                value={user.password}
                onChange={(e)=>setUser({...user,name: e.target.value})}
                /><br/>
                <br/>
                <Names htmlFor="confirmPassword">Confirme sua senha:</Names><br/>
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
            
        </div>
    )
}

export default Registrar