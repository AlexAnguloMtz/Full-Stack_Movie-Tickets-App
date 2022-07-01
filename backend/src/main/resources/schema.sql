DROP TABLE IF EXISTS showtime;
DROP TABLE IF EXISTS movie;

CREATE TABLE movie(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(60) NOT NULL,
    duration_in_minutes INT NOT NULL,
    on_exhibition TINYINT NOT NULL,
    PRIMARY KEY(id)
)  ENGINE=INNODB;

CREATE TABLE showtime(
    id INT NOT NULL AUTO_INCREMENT,
    movie_id INT NOT NULL,
    date_time DATETIME NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (movie_id)
        REFERENCES movie(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
) ENGINE=INNODB;



