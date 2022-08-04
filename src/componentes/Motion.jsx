import sliders from '../json/movie.json';
import {motion} from 'framer-motion';
import '../css-componentes/motion.css';
import {Link} from 'react-router-dom';

function Motion(){
    const imgUrl = 'https://image.tmdb.org/t/p/w300';
    return (
        <motion.div className='motion-slider'>
            <motion.div className='slider' drag='x' dragConstraints={{right: 0, left: -3340}}>
                {sliders.map((slid)=>(
                    <motion.div className='items'>
                        <img src={imgUrl + slid.poster_path} alt={slid.title} />
                        <p>{slid.title}</p>
                    </motion.div>
                ))}
            </motion.div>
            <div>
                <Link to="/">Volver ala Raiz</Link>
            </div>
        </motion.div>


    );
};


export default Motion;