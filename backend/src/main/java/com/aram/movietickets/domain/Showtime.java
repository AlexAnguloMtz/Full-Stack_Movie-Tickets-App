package com.aram.movietickets.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "showtime")
@NoArgsConstructor(force = true)
@ToString(onlyExplicitlyIncluded = true)
public class Showtime extends AbstractEntity implements Comparable <Showtime> {

    @ManyToOne
    @JoinColumn(name = "movie_id")
    @JsonBackReference
    private final Movie movie;

    @ToString.Include
    @Getter
    @Column(name = "date_time")
    private final LocalDateTime localDateTime;

    public Integer getHour() {
        return localDateTime.getHour();
    }

    public Integer getMinute() {
        return localDateTime.getMinute();
    }

    public boolean isOnDate(LocalDateTime someDate) {
        return sameYear(someDate) && sameMonth(someDate) && sameDay(someDate);
    }

    private boolean sameYear(LocalDateTime someDate) {
        return getYear() == someDate.getYear();
    }

    private boolean sameMonth(LocalDateTime someDate) {
        return getMonth() == someDate.getMonthValue();
    }

    private boolean sameDay(LocalDateTime someDate) {
        return getDayOfMonth() == someDate.getDayOfMonth();
    }

    private Integer getYear() {
        return this.localDateTime.getYear();
    }

    private Integer getMonth() {
        return this.localDateTime.getMonthValue();
    }

    private Integer getDayOfMonth() {
        return this.localDateTime.getDayOfMonth();
    }

    @Override
    public int compareTo(Showtime another) {
        return this.localDateTime.compareTo(another.getLocalDateTime());
    }
}
