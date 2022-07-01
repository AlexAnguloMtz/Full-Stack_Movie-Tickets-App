package com.aram.movietickets.controller;

import com.aram.movietickets.service.MovieService;
import com.aram.movietickets.service.dto.MovieDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Collection;

@RestController
@RequestMapping("/movies")
class MovieController {

    private final MovieService movieService;

    @Autowired
    MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/{year}-{month}-{day}")
    ResponseEntity<Collection<MovieDto>> findMoviesForDate(@PathVariable Integer year,
                                                           @PathVariable Integer month,
                                                           @PathVariable Integer day) {

        LocalDateTime date = dateOf(year, month, day);
        return new ResponseEntity<>(movieService.findAllMoviesForDate(date), HttpStatus.OK);

    }

    private LocalDateTime dateOf(Integer year, Integer month, Integer day) {
        int hourZero = 0;
        int minuteZero = 0;
        return LocalDateTime.of(year, month, day, hourZero, minuteZero);
    }

}
