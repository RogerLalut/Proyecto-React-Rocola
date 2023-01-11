
import './ItemListContainerStyle.css';
import ItemCount from '../../components/ItemCount/ItemCount';

const ItemListContainer = (props) => {
return (
<div className='Saludo'>
    <h1>{props.saludo}</h1>
    <ItemCount></ItemCount>
</div>
);
}

export default ItemListContainer;