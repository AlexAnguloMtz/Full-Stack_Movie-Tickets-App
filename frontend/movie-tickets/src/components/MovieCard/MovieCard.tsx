import './MovieCard.scss'
import { Movie } from '../../common/types/Movie';
import { ReactElement } from 'react';

// Showtimes won't be duplicated inside a Movie showtimes array. 
// We use the string value of each showtime as the key
const renderShowtime = (showTime: string): ReactElement => (
    <p  key={showTime}
        className='movie-card__showtimes__text'>
        {showTime}
    </p> 
);

export const MovieCard: React.FC<Movie> = ({title, durationInMinutes, showTimes, poster}) => {
    return (
    <article className="movie-card">
        <header>
            <h1 className="movie-card__title">{title}</h1>
        </header>
        <div className="movie-card__duration">
            <p className="movie-card__duration__text">
                Duration: {durationInMinutes} min
            </p>
        </div>
        <figure className='movie-card__picture'>
            <img className='movie-card__picture__image' src={poster} alt={`Movie picture: ${title}`} />
        </figure>
        <footer className='movie-card__showtimes'>
            {showTimes.map(renderShowtime)}
        </footer>
    </article>
    );
}