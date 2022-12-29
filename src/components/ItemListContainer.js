
import './ItemListContainerStyle.css';


const ItemListContainer = (props) => {
return (
<div className='Saludo'>
    <h1>{props.saludo}</h1>
</div>
);
}

export default ItemListContainer;