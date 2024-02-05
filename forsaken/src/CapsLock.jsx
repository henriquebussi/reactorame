function CapsLock(props){

    // Criando uma constante e recebendo
    // Os Valores do componente
    const TextoInserido = props.children

    // Criando a funcionalidade
    const TextoFinalizado = TextoInserido.toUpperCase();

    // Retornado para a tela

    return (
    // <div>(TextoFinalizado)</div>

    <>
    <h1>{TextoFinalizado}</h1>
    </>
    )
}

export default CapsLock