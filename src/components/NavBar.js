
import CartWidget from './CartWidget'
import './NavBarStyle.css'

function NavBar(props) {
    return (
    <div className={props.className}>
        <ul>
            <img src='../Logo.png'/>
            <li>Poleras</li>
            <li>Polerones</li>
            <li>Musica</li>
            <li>merchandising</li>
            <li>Contacto</li>  
            <li>Carrito</li>  
            <CartWidget/> 
        </ul>     
        
    </div>
    );
}

export default NavBar;