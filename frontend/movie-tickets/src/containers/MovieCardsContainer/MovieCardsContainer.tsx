import './MovieCardsContainer.css'
import { ReactElement, useEffect, useState } from 'react';
import { Movie } from '../../common/types/Movie';
import { MovieService } from '../../services/MovieService';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { DatePicker } from '../../components/DatePicker/DatePicker';

const movieService: MovieService = new MovieService();

const today = new Date();

const renderMovie = (movie: Movie): ReactElement => {
    return <MovieCard key={movie.id}
                      title={movie.title}
                      durationInMinutes={movie.durationInMinutes}                    
                      showTimes={movie.showTimes}/>;
}

export const MovieCardsContainer: React.FC = () => {

    const [movies, setMovies] = useState<Movie[]> ([]);

    useEffect(() => {loadMovies(today)}, []);

    const loadMovies = (date: Date) => {
        movieService.getMoviesForDate(date)
            .then(movies => setMovies(movies));
    }

    return (
        <div className='movie-cards__container'>
            <DatePicker initialDate={today}
                        onDateChange={loadMovies}/>
            {movies.map(renderMovie)}
        </div>
    );
    
}


