import {useEffect, useState} from 'react';
import Movies from '../componentes/movies';
import fecthApi from '../componentes/fecthApi';
import {Link} from 'react-router-dom';
import Spinners from '../componentes/Spinners';

export function Moviespage(){

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setIsLoading(true);
        fecthApi('/discover/movie').then((data)=>{
            setMovies(data.results);
            setIsLoading(false);
        });
   }, []);

   if(isLoading){
    return <Spinners />
   }

    return (
        <div>
            <div className='text-center p-3'>
                <Link to="/motion">Ir al Slider Motion</Link>
            </div>
            <ul className='contenedor-pelis container' >
                {movies.map((pelis)=>(
                <Movies key={pelis.id} pelis={pelis} />
                ))}
            </ul>

        </div>
    )
}