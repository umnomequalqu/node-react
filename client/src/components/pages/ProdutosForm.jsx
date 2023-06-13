import React,{useState} from "react";

function ProdutosForm(){
    const [disponivel,setDisponivel] = useState(false);

    const handleCheckboxChange = (event)=>{
        setDisponivel(event.target.checked);
    }
    return(
        <div>
            <h1> Cadastre seu Produto</h1>
            <div>
                <form>
                    <label htmlFor="nome">Name</label>
                    <input type="text" id="nome" name="nome"/>
                    <label htmlFor="desc">Descrição </label>
                    <input type="text" id="desc" name="desc"/>
                    <label htmlFor="price">Price</label>
                    <input type="number" id="price" name="price"/>
                    <label htmlFor="disponivel">Produto Disponivel:</label>
                    <input
                        type="checkbox"
                        name="disponivel"
                        id="disponivel"/>
                    <label htmlFor="nDisponivel">Produto NãoDisponivel:</label>
                    <input
                        type="checkbox"
                        name="nDisponivel"
                        id="nDisponivel"/>
                </form>
            </div>
        </div>
    )
}

export default ProdutosForm