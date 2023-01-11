import Button from 'react-bootstrap/Button';
import "./ItemCountStyle.css"
import { useState } from 'react';


export const ItemCount = () => {
    const [contador, setContador] = useState(0);

    const stock = 10;

    const sumar = () =>{
        if(stock === contador){
            alert('No quedan más productos en stock')
            return;
        }
        setContador(contador+1)
    };
    const restar = () =>{
        if(contador === 0){
            alert('No quedan productos que quitar')
            return;
        }
        setContador(contador-1)
    };
        
    
  return (
    <div className='botonesCount'>
        <div className='controlador'>
            <Button onClick={restar} variant="warning">Quitar</Button>
            <div>
                <span>{contador}</span>
            </div>
            <Button onClick={sumar} variant="warning">Agregar</Button>
        </div>
        <div>
            <Button variant="primary">Agregar al Carro</Button>
        </div>
    </div>
  )
}
export default ItemCount;
