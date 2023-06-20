import React,{useState} from "react";
import axios from "axios";

function ProdutosForm(){
    const [disponivel,setDisponivel] = useState(false);
    const [nome,setNome] = useState(false);
    const [price,setPrice] = useState(false);
    const [desc,setDesc] = useState(false);

    const handleCheckboxChange = (event)=>{
        setDisponivel(event.target.checked);
    }

    const envioFormulario = (event)=>{
        event.preventDefault();
        cadastrarProduto();
    }

    function cadastrarProduto(produto){
        console.log(typeof(disponivel))
        axios.post('https://loja-aula.onrender.com/products',{disponivel,nome,desc,price})
            .then(res=>HTMLFormControlsCollection.log(res.data))
            .catch(erro=>console.log(erro))
    }    return(
        <div>
            <h1> Cadastre seu Produto</h1>
            <div>
                <form onSubmit={envioFormulario}>
                    <label htmlFor="nome">Name</label>
                    <input 
                        type="text" 
                        id="nome" 
                        name="nome"
                        onChange={(e)=>setNome(e.target.value)}
                    />
                    <label htmlFor="desc">Descrição </label>
                    <input 
                        type="text" 
                        id="desc" 
                        name="desc"
                        onChange={(e)=>setDesc(e.target.value)}
                    />
                    <label htmlFor="price">Price</label>
                    <input 
                        type="number" 
                        id="price" 
                        name="price"
                        onChange={(e)=>setPrice(e.target.value)}
                    />
                    <label htmlFor="disponivel">Produto Disponivel:</label>
                    <input
                        type="checkbox"
                        name="disponivel"
                        id="disponivel"
                        checked={disponivel}
                        onChange={handleCheckboxChange}
                        />
                    <label htmlFor="nDisponivel">Produto NãoDisponivel:</label>
                    <input
                        type="checkbox"
                        name="nDisponivel"
                        id="nDisponivel"
                        checked={!disponivel}
                        onChange={handleCheckboxChange}
                        />
                        <button type="submit">Cadastrar Produto</button>
                </form>
            </div>
        </div>
    )
}

export default ProdutosForm