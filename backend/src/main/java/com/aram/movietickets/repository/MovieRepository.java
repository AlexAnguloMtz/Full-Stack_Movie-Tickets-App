package com.aram.movietickets.repository;

import com.aram.movietickets.domain.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {
    Collection<Movie> findAllByOnExhibition(boolean isOnExhibition);
}
