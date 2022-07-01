package com.aram.movietickets.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
@AllArgsConstructor
@NoArgsConstructor(force = true)
@Getter
class AbstractEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    final Integer id;

}
