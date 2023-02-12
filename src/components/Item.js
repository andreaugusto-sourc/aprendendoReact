import PropTypes from 'prop-types';

function Item ({marca, lancamento}) {
    return(
        <>
            <li>{marca} - {lancamento}</li>
        </>
    )
}
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number.isRequired,
}

Item.defaultProps = {
    marca: "coloca uma marca man",
    lancamento: 2020,
}
export default Item;