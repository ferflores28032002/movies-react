import {useEffect, useState} from 'react';
import Movies from '../componentes/movies';
import fecthApi from '../componentes/fecthApi';
import {Link} from 'react-router-dom';
import Spinners from '../componentes/Spinners';
import Buscador from '../componentes/buscador';
import { useLocation } from 'react-router';

// Creamos un hooks perssonalizado para usar 

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

export function Moviespage(){

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const query = useQuery();
    const search = query.get('search');

    useEffect(()=>{
        setIsLoading(true);
        const buscarUrl = search ? '/search/movie?query=' + search : '/discover/movie';
        fecthApi(buscarUrl).then((data)=>{
            setMovies(data.results);
            setIsLoading(false);
        });
   }, [search]);

   if(isLoading){
    return <Spinners />
   }

    return (
        <div>
            <div className='text-center p-3'>
                <Link to="/motion">Ir al Slider Motion</Link>
                <Buscador />
            </div>
            <ul className='contenedor-pelis container' >
                {movies.map((pelis)=>(
                <Movies key={pelis.id} pelis={pelis} />
                ))}
            </ul>

        </div>
    )
}