import '../css-componentes/movies.css';
import {Link} from 'react-router-dom';

function Movies({pelis}){
    const imgUrl = 'https://image.tmdb.org/t/p/w300' + pelis.poster_path;
   return (
    <li>
        <Link to={"/movie/" + pelis.id}>
            <img src={imgUrl} alt={pelis.title} className='img-pelis' />
            <p className='text-light'>{pelis.title}</p>
        </Link> 
    </li>
   )
}



export default Movies;