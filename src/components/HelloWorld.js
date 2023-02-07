import Frase from './Frase';

function HelloWorld(){
    const frasePedro = "Não caraaa!";
    return(
        <div>
            <h1>Meu primeiro componente</h1>
            <Frase frase={frasePedro} />
        </div>
    )
}

export default HelloWorld;