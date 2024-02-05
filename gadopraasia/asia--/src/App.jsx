import Titulo from "./titulo"

function app(){
  return (
    <div>
    <Titulo nome="Pardal" coca="Engradado de Coca" cor="red" paragrafo={true}/>
    <Titulo deverswitch="esta muito feliz"cor="blue"/>
    <Titulo cor="purple"/>
    <Titulo cor="orangered"/>
    </div>
  )
}

export default app