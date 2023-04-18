import React from "react";
import { ModeloTitulo,TituloData,TituloNome} from "./styles/styles";
function Titulo(){
    return(
        <ModeloTitulo>
            <TituloNome>cadastro de tarefas</TituloNome>
            <TituloData>Terça Feira, 18 de abril</TituloData>
        </ModeloTitulo>
    )
}
export default Titulo