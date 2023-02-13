import Button from './evento/Button';

function Evento(){
    function meuEvento() {
        alert(`Ativando primeiro evento!`);
    }
    function segundoEvento() {
        alert(`Ativando segundo evento!`);
    }

    return(
        <>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro evento" />
            <Button event={segundoEvento} text="Segundo evento" />
        </>
    );
}

export default Evento;