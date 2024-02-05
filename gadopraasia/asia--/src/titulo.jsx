
function Titulo({nome, coca, paragrafo, cor, deverswitch}) {   //Função Java Script 

    // let nome = "pardal";
    const soma = 1 + 1

    const urlImg = "https://i.pinimg.com/originals/aa/31/7e/aa317e3d51528658e31155d150f127e7.jpg";


    return (
        <div>   
            <h1 style={{color:cor}}>oi eu sou {nome ? nome : "Fulano"}</h1>
            Oi hoje {deverswitch ? deverswitch: <p>devo  {soma}+ {coca ? coca: "Engradados de Coca Cola"}</p>}

            
            {paragrafo ?

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio officiis facilis, sint laboriosam molestias ab quia, repudiandae dolorem provident, animi minus dolorum debitis cumque? </p>

: <p>Nada</p>

}            <img width={150} src={urlImg} />
        </div>
    )
    
}
export default Titulo