package com.aram.movietickets.service;

import com.aram.movietickets.domain.Movie;
import com.aram.movietickets.domain.Showtime;
import com.aram.movietickets.repository.MovieRepository;
import com.aram.movietickets.service.dto.MovieDto;
import com.aram.movietickets.service.mapper.MovieMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Set;
import java.util.TreeSet;

import static java.util.stream.Collectors.toCollection;
import static java.util.stream.Collectors.toList;

@Service
@Slf4j
public class MovieService {

    private final MovieRepository movieRepository;
    private final MovieMapper movieMapper;

    @Autowired
    public MovieService(MovieRepository movieRepository, MovieMapper movieMapper) {
        this.movieRepository = movieRepository;
        this.movieMapper = movieMapper;
    }

    @Transactional
    public Collection<MovieDto> findAll() {
        Collection<Movie> allMovies = movieRepository.findAll();
        return allMovies.stream()
                .map(this::mapToMovieDto)
                .collect(toList());
    }

    private MovieDto mapToMovieDto(Movie movie) {
        return movieMapper.mapToMovieDto(movie);
    }


    @Transactional
    public Collection<MovieDto> findAllMoviesForDate(LocalDateTime date) {
        Collection<Movie> movies = movieRepository.findAllByOnExhibition(true);
        return movies.stream()
                .filter(movie -> hasShowtimesOnDate(movie, date))
                .map(movie -> movieWithShowTimesOnDate(movie, date))
                .map(this::mapToMovieDto)
                .collect(toList());
    }

    private boolean hasShowtimesOnDate(Movie movie, LocalDateTime date) {
        return movie.getShowtimes().stream()
                .anyMatch(showtime -> showtime.isOnDate(date));
    }

    private Movie movieWithShowTimesOnDate(Movie movie, LocalDateTime date) {
        Set<Showtime> showtimes = movie.getShowtimes();
        Set<Showtime> showtimesOnDesiredDate = exctractShowtimesOnDesiredDate(showtimes, date);
        return Movie.copyWithShowtimes(movie, showtimesOnDesiredDate);
    }

    private Set<Showtime> exctractShowtimesOnDesiredDate(Set<Showtime> showtimes, LocalDateTime date) {
        return showtimes.stream()
                .filter(showtime -> showtime.isOnDate(date))
                .collect(toCollection(TreeSet::new));
    }
}
