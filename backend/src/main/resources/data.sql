INSERT INTO movie(on_exhibition, title, duration_in_minutes, poster_URL)
    VALUES(1, 'Thor Love and Thunder', 120,
                'https://movie-theater-pictures.s3.us-west-1.amazonaws.com/thor-love-and-thunder.jpeg'),

          (1, 'Black Phone', 102,
                'https://movie-theater-pictures.s3.us-west-1.amazonaws.com/black-phone.jpeg'),

          (1, 'Lightyear', 105,
                'https://movie-theater-pictures.s3.us-west-1.amazonaws.com/lightyear.jpeg'),

          (1, 'Jurassic World: Dominion', 148,
                'https://movie-theater-pictures.s3.us-west-1.amazonaws.com/jurassic-world-dominion.jpeg'),

          (1, 'Top Gun: Maverick', 131,
                'https://movie-theater-pictures.s3.us-west-1.amazonaws.com/top-gun-maverick.jpeg'),

          (1, 'Minions: The Rise Of Gru', 91,
                'https://movie-theater-pictures.s3.us-west-1.amazonaws.com/minions-rise-of-gru.jpeg'),

          (1, 'Dr. Strange In The Multiverse Of Madness', 140,
                'https://movie-theater-pictures.s3.us-west-1.amazonaws.com/dr-strange-2.jpeg'),

          (1, 'Everything Everywhere All At Once', 120,
                'https://movie-theater-pictures.s3.us-west-1.amazonaws.com/everything-everywhere-all-at-once.jpg');

INSERT INTO showtime(movie_id, date_time)
    VALUES(1, '2022-07-01 15:00:00'),
          (1, '2022-07-01 17:20:00'),
          (1, '2022-07-01 19:40:00'),
          (1, '2022-07-01 22:00:00'),
          (2, '2022-07-01 16:00:00'),
          (2, '2022-07-01 18:00:00'),
          (2, '2022-07-01 20:00:00'),
          (2, '2022-07-01 22:00:00'),
          (3, '2022-07-01 16:30:00'),
          (3, '2022-07-01 18:30:00'),
          (3, '2022-07-01 20:30:00'),
          (3, '2022-07-01 22:30:00'),
          (4, '2022-07-01 15:45:00'),
          (4, '2022-07-01 18:45:00'),
          (4, '2022-07-01 21:45:00'),
          (5, '2022-07-01 15:25:00'),
          (5, '2022-07-01 17:45:00'),
          (5, '2022-07-01 20:05:00'),
          (5, '2022-07-01 22:35:00'),
          (6, '2022-07-01 15:00:00'),
          (6, '2022-07-01 17:20:00'),
          (6, '2022-07-01 19:40:00'),
          (6, '2022-07-01 22:00:00'),
          (7, '2022-07-02 15:00:00'),
          (7, '2022-07-02 17:20:00'),
          (7, '2022-07-02 19:40:00'),
          (7, '2022-07-30 22:00:00'),
          (8, '2022-07-02 15:00:00'),
          (8, '2022-07-02 17:20:00'),
          (8, '2022-07-02 19:40:00'),
          (8, '2022-07-02 22:00:00'),
          (1, '2022-07-02 15:00:00'),
          (1, '2022-07-02 17:20:00'),
          (1, '2022-07-02 19:40:00'),
          (1, '2022-07-02 22:00:00'),
          (2, '2022-07-02 16:00:00'),
          (2, '2022-07-02 18:00:00'),
          (2, '2022-07-02 20:00:00'),
          (2, '2022-07-02 22:00:00'),
          (3, '2022-07-02 16:30:00'),
          (3, '2022-07-02 18:30:00'),
          (3, '2022-07-02 20:30:00'),
          (3, '2022-07-02 22:30:00'),
          (4, '2022-07-02 15:45:00'),
          (4, '2022-07-02 18:45:00'),
          (4, '2022-07-02 21:45:00'),
          (5, '2022-07-02 15:25:00'),
          (5, '2022-07-02 17:45:00'),
          (5, '2022-07-02 20:05:00'),
          (5, '2022-07-02 22:35:00'),
          (6, '2022-07-02 15:25:00'),
          (6, '2022-07-02 17:45:00'),
          (6, '2022-07-02 20:05:00'),
          (6, '2022-07-02 22:35:00'),
          (7, '2022-07-02 15:25:00'),
          (7, '2022-07-02 17:45:00'),
          (7, '2022-07-02 20:05:00'),
          (7, '2022-07-02 22:35:00'),
          (1, '2022-07-03 15:00:00'),
          (1, '2022-07-03 17:20:00'),
          (1, '2022-07-03 19:40:00'),
          (1, '2022-07-03 22:00:00'),
          (2, '2022-07-03 16:00:00'),
          (2, '2022-07-03 18:00:00'),
          (2, '2022-07-03 20:00:00'),
          (2, '2022-07-03 22:00:00'),
          (3, '2022-07-03 16:30:00'),
          (3, '2022-07-03 18:30:00'),
          (3, '2022-07-03 20:30:00'),
          (3, '2022-07-03 22:30:00'),
          (4, '2022-07-03 15:45:00'),
          (4, '2022-07-03 18:45:00'),
          (4, '2022-07-03 21:45:00'),
          (5, '2022-07-03 15:25:00'),
          (5, '2022-07-03 17:45:00'),
          (5, '2022-07-03 20:05:00'),
          (5, '2022-07-03 22:35:00');