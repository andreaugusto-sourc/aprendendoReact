import Item from './Item';

function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Item 1" lancamento={2023} />
                <Item marca="Item 2" lancamento={2024} />
                <Item marca="Item 3" lancamento={2025} />
            </ul>
        </>
    )
}

export default List;