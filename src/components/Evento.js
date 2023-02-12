function Evento({numero}){

    function meuEvento() {
        alert(`Evento ativado! ${numero}`);
    }

    return(
        <>
        <p>Clique para disparar um evento</p>
        <button onClick={meuEvento}>Disparar</button>
        </>
    );
}

export default Evento;