package com.aram.movietickets.service.dto;

import lombok.Getter;
import lombok.ToString;

import java.util.Formattable;
import java.util.Formatter;

import static java.lang.String.format;

@Getter
@ToString
public class ShowtimeDto {

    private final String time;

    public ShowtimeDto(Integer hour, Integer minute) {
        this.time = formatTime(hour, minute);
    }

    private String formatTime(Integer hour, Integer minute) {
        String hourWithPadding = padWithZeros(hour);
        String minuteWithPadding = padWithZeros(minute);
        return format("%s:%s", hourWithPadding, minuteWithPadding);
    }

    private String padWithZeros(Integer number) {
        if(hasOneDigit(number)) {
            return addZeroToTheLeft(number);
        }
        return String.valueOf(number);
    }

    private String addZeroToTheLeft(Integer number) {
        return format("0%d", number);
    }

    private boolean hasOneDigit(Integer number) {
        return number > -10 && number < 10;
    }

}
