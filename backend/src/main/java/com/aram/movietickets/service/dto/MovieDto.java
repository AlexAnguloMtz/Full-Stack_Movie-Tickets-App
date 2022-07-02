package com.aram.movietickets.service.dto;

import lombok.Getter;

import java.util.List;
import java.util.Set;

import static java.util.stream.Collectors.toList;

@Getter
public class MovieDto {

    private final Integer id;
    private final String title;
    private final Integer durationInMinutes;
    private final Set<ShowtimeDto> showtimes;

    private final String poster;

    public MovieDto(Integer id, String title, Integer durationInMinutes, Set<ShowtimeDto> showtimes, String poster) {
        this.id = id;
        this.title = title;
        this.durationInMinutes = durationInMinutes;
        this.showtimes = showtimes;
        this.poster = poster;
    }

    public List<String> getShowTimes() {
        return showtimes.stream()
                .map(ShowtimeDto::getTime)
                .collect(toList());
    }

}
