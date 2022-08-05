import {FaSearch} from 'react-icons/fa';
import '../css-componentes/Buscador.css';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Buscador(){
    const [pelicula, setPelicula] = useState('');
    const history = useNavigate();
    const cargarTexto = (e) =>{
        e.preventDefault();
        history('/?search=' + pelicula);
    }
    return(
        <form  className='caja-contador' onSubmit={cargarTexto}>
            <div className='d-flex buscador'>
                <input type="text" 
                value={pelicula} 
                className='form-control' 
                onChange={(e)=>{setPelicula(e.target.value)}}
                />
                <button type="submit" className='btn btn-primary'><FaSearch /></button>
            </div>
        </form>
   )


}

export default Buscador;