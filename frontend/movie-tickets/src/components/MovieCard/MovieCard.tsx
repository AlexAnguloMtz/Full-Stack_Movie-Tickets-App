import './MovieCard.css'
import { Movie } from '../../common/types/Movie';
import { ReactElement } from 'react';

// Showtimes won't be duplicated inside a Movie showtimes array. 
// We use the string value of each showtime as the key
const renderShowtime = (showTime: string) => (
    <p  key={showTime}
        className='movie-card__showtime-text'>
        {showTime}
    </p> 
);

export const MovieCard: React.FC<Movie> = ({title, durationInMinutes, showTimes}) => (
    <article className="movie-card">
        <h1 className="movie-card__title">{title}</h1>
        <div className="movie-card__duration-container">
            <p className="movie-card__duration">
                Duration: {durationInMinutes} min
            </p>
        </div>
        <div className='movie-card__show-times-container'>
            {showTimes.map(renderShowtime)}
        </div>
    </article>
);