package com.aram.movietickets.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "movie")
@NoArgsConstructor(force = true)
@ToString
@Getter
public class Movie extends AbstractEntity {

    @Column(name = "title")
    private final String title;

    @Column(name = "duration_in_minutes")
    private final Integer durationInMinutes;

    @Column(name = "on_exhibition")
    private final boolean onExhibition;

    @OneToMany(mappedBy = "movie")
    @JsonManagedReference
    private final Set<Showtime> showtimes;

    public Movie(Integer id,
                 String title,
                 Integer durationInMinutes,
                 boolean onExhibition,
                 Set<Showtime> showtimes) {
        super(id);
        this.title = title;
        this.durationInMinutes = durationInMinutes;
        this.onExhibition = onExhibition;
        this.showtimes = showtimes;
    }

    public static Movie copyWithShowtimes(Movie movie, Set<Showtime> newShowtimes) {
        Integer id = movie.getId();
        String title = movie.getTitle();
        Integer durationInMinutes = movie.getDurationInMinutes();
        boolean onExhibition = movie.isOnExhibition();
        return new Movie(id, title, durationInMinutes, onExhibition, newShowtimes);
    }

}
