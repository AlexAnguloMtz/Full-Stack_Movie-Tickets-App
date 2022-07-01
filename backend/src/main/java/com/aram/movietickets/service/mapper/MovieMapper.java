package com.aram.movietickets.service.mapper;

import com.aram.movietickets.domain.Movie;
import com.aram.movietickets.domain.Showtime;
import com.aram.movietickets.service.dto.MovieDto;
import com.aram.movietickets.service.dto.ShowtimeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.LinkedHashSet;
import java.util.Set;

import static java.util.stream.Collectors.toCollection;

@Component
public class MovieMapper {

    private final ShowtimeMapper showtimeMapper;

    @Autowired
    public MovieMapper(ShowtimeMapper showtimeMapper) {
        this.showtimeMapper = showtimeMapper;
    }

    public MovieDto mapToMovieDto(Movie movie) {
        Integer id = movie.getId();
        String title = movie.getTitle();
        Integer durationInMinutes = movie.getDurationInMinutes();
        return new MovieDto(id, title, durationInMinutes, exctractShowTimeDtos(movie));
    }

    private Set<ShowtimeDto> exctractShowTimeDtos(Movie movie) {
        Set<Showtime> showtimes = movie.getShowtimes();
        return showtimes.stream()
                .map(showtimeMapper::mapToShowTimeDto)
                .collect(toCollection(LinkedHashSet::new));
    }

}
