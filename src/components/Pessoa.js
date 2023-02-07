function Pessoa({nome,imagem,idade}) {
    return(
        <div>
            <h2>Nome: {nome}, Idade: {idade}</h2>
            <img src={imagem} alt={nome} />
        </div>
    )
}

export default Pessoa;