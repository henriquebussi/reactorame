import { useState } from "react";

function Contador(){

    const [contador, setContador] = useState(1)
        
        function adicionarContador(){
            setContador(contador+1)
        }

    return(
        <div>
            <div id="divone">{contador}</div>
            <button id="buttonadd" onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Contador;