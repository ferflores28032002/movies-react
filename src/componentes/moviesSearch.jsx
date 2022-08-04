import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import fetchApi from './fecthApi';
import {Link} from 'react-router-dom';
import Spinners from '../componentes/Spinners';

function MoviesSearch(){
    const {movieid} = useParams();
    const [movie, setmovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setIsLoading(true);
        fetchApi('/movie/' + movieid).then((data)=>{
            setmovie(data);
            setIsLoading(false);
        })
    }, [movieid]);

    if(isLoading){
        return <Spinners />
    }

    if(!movie){
        return null;
    }

    const imagen = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
    const imagen2 = 'https://image.tmdb.org/t/p/w300' + movie.backdrop_path;
    return (
        <div className='container'>
            <div className='card' id="card-card">

                <div className='card-header'>
                    <h5>{movie.title}</h5>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img className=' rounded-start' src={imagen} alt={movie.title} />
                        </div>
                        <div className='col-md-8'>
                            <Link to="/"><h4>Volver al Ménu</h4></Link>
                            <h4><strong>Titulo:</strong> {movie.title}</h4>
                            <h5><strong>Eslogan:</strong> {movie.tagline}</h5>
                            <h6><strong>Géneros:</strong> {movie.genres.map(genre => genre.name).join(', ')}</h6>
                            <p><strong>Descripción:</strong> {movie.overview}</p>
                            <h6>{movie.production_companies.map((production => (
                                production.name))).join(', ')}</h6>
                            <img className='rounded-start p-3' src={imagen2} alt={movie.title} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MoviesSearch;