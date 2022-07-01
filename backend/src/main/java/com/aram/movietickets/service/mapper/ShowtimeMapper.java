package com.aram.movietickets.service.mapper;

import com.aram.movietickets.domain.Showtime;
import com.aram.movietickets.service.dto.ShowtimeDto;
import org.springframework.stereotype.Component;

@Component
class ShowtimeMapper {

    public ShowtimeDto mapToShowTimeDto(Showtime showtime) {
        Integer hour = showtime.getHour();
        Integer minute = showtime.getMinute();
        return new ShowtimeDto(hour, minute);
    }
}
