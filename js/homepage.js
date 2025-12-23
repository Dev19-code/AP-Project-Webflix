// Demo data set (richer examples for details page)
const demoMovies = [
{
  id: 'movie-1',
  title: 'The Shawshank Redemption',
  year: 1994,
  duration: 142,
  rating: '9.3',
  poster: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
  genres: ['Drama'],
  description: 'A powerful story of hope, friendship, and endurance inside a brutal prison system.',
  summary: 'Two imprisoned men bond over several years, finding solace and eventual redemption.',
  cast: ['Tim Robbins', 'Morgan Freeman'],
  languages: ['English'],
  director: 'Frank Darabont',
  producer: 'Castle Rock Entertainment',
  download: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
  trailer: 'https://www.youtube.com/watch?v=6hB3S9bIaco',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg' }
  ],
  scenes: ['Prison arrival', 'Library expansion', 'Final reunion'],
  similar: []
},

{
  id: 'movie-2',
  title: 'The Godfather',
  year: 1972,
  duration: 175,
  rating: '9.2',
  poster: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
  genres: ['Crime', 'Drama'],
  description: 'A cinematic masterpiece depicting the rise of a powerful mafia family.',
  summary: 'The aging patriarch transfers control of his empire to his reluctant son.',
  cast: ['Marlon Brando', 'Al Pacino'],
  languages: ['English', 'Italian'],
  director: 'Francis Ford Coppola',
  producer: 'Paramount Pictures',
  download: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
  trailer: 'https://www.youtube.com/watch?v=sY1S34973zA',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg' }
  ],
  scenes: ['Wedding opening', 'Restaurant assassination', 'Final door closing'],
  similar: []
},

{
  id: 'movie-3',
  title: 'The Dark Knight',
  year: 2008,
  duration: 152,
  rating: '9.0',
  poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
  genres: ['Action', 'Crime', 'Drama'],
  description: 'A dark superhero film exploring morality and chaos.',
  summary: 'Batman faces the Joker, a criminal mastermind spreading anarchy in Gotham.',
  cast: ['Christian Bale', 'Heath Ledger'],
  languages: ['English'],
  director: 'Christopher Nolan',
  producer: 'Warner Bros.',
  download: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
  trailer: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' }
  ],
  scenes: ['Bank heist', 'Interrogation scene', 'Hospital explosion'],
  similar: [
    { id: 'similar-1', title: 'Batman Begins', poster: 'https://image.tmdb.org/t/p/w500/1P3ZyEq02wcTMd3iE4ebtLvncvH.jpg' }
  ]
},

{
  id: 'movie-4',
  title: 'Inception',
  year: 2010,
  duration: 148,
  rating: '8.8',
  poster: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
  genres: ['Science Fiction', 'Action'],
  description: 'A mind-bending sci-fi thriller set within layered dreams.',
  summary: 'A thief must plant an idea inside a target’s subconscious.',
  cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt'],
  languages: ['English', 'Japanese'],
  director: 'Christopher Nolan',
  producer: 'Legendary Pictures',
  download: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
  trailer: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' }
  ],
  scenes: ['Paris folding', 'Zero gravity fight', 'Spinning top'],
  similar: [
    { id: 'similar-2', title: 'Interstellar', poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' }
  ]
},

{
  id: 'movie-5',
  title: 'Interstellar',
  year: 2014,
  duration: 169,
  rating: '8.6',
  poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
  genres: ['Science Fiction', 'Drama'],
  description: 'An emotional journey through space and time.',
  summary: 'Explorers travel through a wormhole to save humanity.',
  cast: ['Matthew McConaughey', 'Anne Hathaway'],
  languages: ['English'],
  director: 'Christopher Nolan',
  producer: 'Legendary Pictures',
  download: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
  trailer: 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' }
  ],
  scenes: ['Docking scene', 'Black hole', 'Tesseract'],
  similar: [
    { id: 'similar-3', title: 'Inception', poster: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' }
  ]
},

{
  id: 'movie-6',
  title: 'Fight Club',
  year: 1999,
  duration: 139,
  rating: '8.8',
  poster: 'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg',
  genres: ['Drama'],
  description: 'A dark exploration of identity and consumerism.',
  summary: 'An office worker forms an underground fight club.',
  cast: ['Brad Pitt', 'Edward Norton'],
  languages: ['English'],
  director: 'David Fincher',
  producer: '20th Century Fox',
  download: 'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg',
  trailer: 'https://www.youtube.com/watch?v=SUXWAEX2jlg',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg' }
  ],
  scenes: ['Basement fight', 'Soap making', 'Final explosion'],
  similar: []
},

{
  id: 'movie-7',
  title: 'Forrest Gump',
  year: 1994,
  duration: 142,
  rating: '8.8',
  poster: 'https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg',
  genres: ['Drama', 'Romance'],
  description: 'A heartwarming journey through modern American history.',
  summary: 'Forrest influences historical events while pursuing true love.',
  cast: ['Tom Hanks', 'Robin Wright'],
  languages: ['English'],
  director: 'Robert Zemeckis',
  producer: 'Paramount Pictures',
  download: 'https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg',
  trailer: 'https://www.youtube.com/watch?v=bLvqoHBptjg',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg' }
  ],
  scenes: ['Bench scene', 'Running montage', 'Final goodbye'],
  similar: []
},

{
  id: 'movie-8',
  title: 'Pulp Fiction',
  year: 1994,
  duration: 154,
  rating: '8.9',
  poster: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
  genres: ['Crime', 'Drama'],
  description: 'A nonlinear crime story full of unforgettable characters.',
  summary: 'The lives of criminals intertwine in Los Angeles.',
  cast: ['John Travolta', 'Samuel L. Jackson'],
  languages: ['English'],
  director: 'Quentin Tarantino',
  producer: 'Miramax',
  download: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
  trailer: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg' }
  ],
  scenes: ['Royale with Cheese', 'Dance contest', 'Final diner scene'],
  similar: []
},

{
  id: 'movie-9',
  title: 'The Matrix',
  year: 1999,
  duration: 136,
  rating: '8.7',
  poster: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
  genres: ['Science Fiction', 'Action'],
  description: 'A revolutionary sci-fi film questioning reality.',
  summary: 'A hacker discovers the truth about the world.',
  cast: ['Keanu Reeves', 'Laurence Fishburne'],
  languages: ['English'],
  director: 'The Wachowskis',
  producer: 'Warner Bros.',
  download: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
  trailer: 'https://www.youtube.com/watch?v=vKQi3bBA1y8',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg' }
  ],
  scenes: ['Red pill choice', 'Lobby shootout', 'Bullet time'],
  similar: [
    { id: 'similar-4', title: 'Inception', poster: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' }
  ]
},

{
  id: 'movie-10',
  title: 'Gladiator',
  year: 2000,
  duration: 155,
  rating: '8.5',
  poster: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
  genres: ['Action', 'Drama'],
  description: 'A Roman general seeks revenge.',
  summary: 'Betrayed general becomes a gladiator.',
  cast: ['Russell Crowe', 'Joaquin Phoenix'],
  languages: ['English'],
  director: 'Ridley Scott',
  producer: 'DreamWorks',
  download: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
  trailer: 'https://www.youtube.com/watch?v=owK1qxDselE',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg' }
  ],
  scenes: ['Colosseum battle', 'Final duel'],
  similar: []
    },

    {
  id: 'movie-11',
  title: 'The Lord of the Rings: The Fellowship of the Ring',
  year: 2001,
  duration: 178,
  rating: '8.8',
  poster: 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
  genres: ['Adventure', 'Fantasy'],
  description: 'An epic journey begins in Middle-earth.',
  summary: 'A hobbit sets out to destroy a powerful ring.',
  cast: ['Elijah Wood', 'Ian McKellen'],
  languages: ['English'],
  director: 'Peter Jackson',
  producer: 'New Line Cinema',
  download: 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
  trailer: 'https://www.youtube.com/watch?v=V75dMMIW2B4',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg' }
  ],
  scenes: ['Shire opening', 'Council of Elrond', 'Balrog battle'],
  similar: [
    { id: 'similar-5', title: 'The Two Towers', poster: 'https://image.tmdb.org/t/p/w500/rrGlNlzFTrXFNGXsD7NNlxq4BPb.jpg' }
  ]
},

{
  id: 'movie-12',
  title: 'The Lord of the Rings: The Two Towers',
  year: 2002,
  duration: 179,
  rating: '8.7',
  poster: 'https://image.tmdb.org/t/p/w500/rrGlNlzFTrXFNGXsD7NNlxq4BPb.jpg',
  genres: ['Adventure', 'Fantasy'],
  description: 'The fellowship is broken but the journey continues.',
  summary: 'Middle-earth prepares for war.',
  cast: ['Viggo Mortensen', 'Ian McKellen'],
  languages: ['English'],
  director: 'Peter Jackson',
  producer: 'New Line Cinema',
  download: 'https://image.tmdb.org/t/p/w500/rrGlNlzFTrXFNGXsD7NNlxq4BPb.jpg',
  trailer: 'https://www.youtube.com/watch?v=LbfMDwc4azU',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/rrGlNlzFTrXFNGXsD7NNlxq4BPb.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/rrGlNlzFTrXFNGXsD7NNlxq4BPb.jpg' }
  ],
  scenes: ['Helm’s Deep', 'Gollum monologue'],
  similar: [
    { id: 'similar-6', title: 'The Return of the King', poster: 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg' }
  ]
},

{
  id: 'movie-13',
  title: 'The Lord of the Rings: The Return of the King',
  year: 2003,
  duration: 201,
  rating: '9.0',
  poster: 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
  genres: ['Adventure', 'Fantasy'],
  description: 'The epic conclusion to the trilogy.',
  summary: 'The final battle for Middle-earth begins.',
  cast: ['Elijah Wood', 'Viggo Mortensen'],
  languages: ['English'],
  director: 'Peter Jackson',
  producer: 'New Line Cinema',
  download: 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
  trailer: 'https://www.youtube.com/watch?v=r5X-hFf6Bwo',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg' }
  ],
  scenes: ['Battle of Pelennor Fields', 'Mount Doom'],
  similar: []
},

{
  id: 'movie-14',
  title: 'The Lion King',
  year: 1994,
  duration: 88,
  rating: '8.5',
  poster: 'https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg',
  genres: ['Animation', 'Drama'],
  description: 'A young lion prince discovers his destiny.',
  summary: 'Simba must reclaim his throne.',
  cast: ['Matthew Broderick', 'James Earl Jones'],
  languages: ['English'],
  director: 'Roger Allers',
  producer: 'Disney',
  download: 'https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg',
  trailer: 'https://www.youtube.com/watch?v=4sj1MT05lAA',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg' }
  ],
  scenes: ['Circle of Life', 'Stampede', 'Final battle'],
  similar: []
},

{
  id: 'movie-15',
  title: 'Whiplash',
  year: 2014,
  duration: 107,
  rating: '8.5',
  poster: 'https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg',
  genres: ['Drama'],
  description: 'A brutal pursuit of musical perfection.',
  summary: 'A student drummer faces an abusive instructor.',
  cast: ['Miles Teller', 'J.K. Simmons'],
  languages: ['English'],
  director: 'Damien Chazelle',
  producer: 'Bold Films',
  download: 'https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg',
  trailer: 'https://www.youtube.com/watch?v=7d_jQycdQGo',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg' }
  ],
  scenes: ['Practice meltdown', 'Final performance'],
  similar: []
},

{
  id: 'movie-16',
  title: 'Joker',
  year: 2019,
  duration: 122,
  rating: '8.4',
  poster: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
  genres: ['Crime', 'Drama'],
  description: 'A dark psychological character study.',
  summary: 'A failed comedian descends into madness.',
  cast: ['Joaquin Phoenix'],
  languages: ['English'],
  director: 'Todd Phillips',
  producer: 'Warner Bros.',
  download: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
  trailer: 'https://www.youtube.com/watch?v=zAGVQLHvwOY',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' }
  ],
  scenes: ['Subway killing', 'Talk show finale'],
  similar: []
},

{
  id: 'movie-17',
  title: 'Avengers: Infinity War',
  year: 2018,
  duration: 149,
  rating: '8.4',
  poster: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
  genres: ['Action', 'Science Fiction'],
  description: 'Heroes unite against a cosmic threat.',
  summary: 'The Avengers face Thanos.',
  cast: ['Robert Downey Jr.', 'Chris Hemsworth'],
  languages: ['English'],
  director: 'Anthony Russo',
  producer: 'Marvel Studios',
  download: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
  trailer: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg' }
  ],
  scenes: ['Titan battle', 'Snap'],
  similar: []
},

{
  id: 'movie-18',
  title: 'Avengers: Endgame',
  year: 2019,
  duration: 181,
  rating: '8.4',
  poster: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
  genres: ['Action', 'Science Fiction'],
  description: 'The epic conclusion of the Infinity Saga.',
  summary: 'The Avengers undo Thanos’s destruction.',
  cast: ['Robert Downey Jr.', 'Chris Evans'],
  languages: ['English'],
  director: 'Anthony Russo',
  producer: 'Marvel Studios',
  download: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
  trailer: 'https://www.youtube.com/watch?v=TcMBFSGVi1c',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg' }
  ],
  scenes: ['Time heist', 'Final battle'],
  similar: [
    { id: 'similar-7', title: 'Infinity War', poster: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg' }
  ]
},

{
  id: 'movie-19',
  title: 'Parasite',
  year: 2019,
  duration: 132,
  rating: '8.5',
  poster: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
  genres: ['Thriller', 'Drama'],
  description: 'A dark social satire.',
  summary: 'Two families become dangerously intertwined.',
  cast: ['Song Kang-ho'],
  languages: ['Korean'],
  director: 'Bong Joon-ho',
  producer: 'Barunson E&A',
  download: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
  trailer: 'https://www.youtube.com/watch?v=5xH0HfJHsaY',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' }
  ],
  scenes: ['Basement reveal', 'Birthday chaos'],
  similar: []
},

{
  id: 'movie-20',
  title: 'Titanic',
  year: 1997,
  duration: 195,
  rating: '7.9',
  poster: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
  genres: ['Drama', 'Romance'],
  description: 'A tragic love story aboard the Titanic.',
  summary: 'Two lovers face disaster at sea.',
  cast: ['Leonardo DiCaprio', 'Kate Winslet'],
  languages: ['English'],
  director: 'James Cameron',
  producer: '20th Century Fox',
  download: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
  trailer: 'https://www.youtube.com/watch?v=kVrqfYjkTdQ',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg' }
  ],
  scenes: ['Deck dance', 'Ship sinking'],
  similar: []
},

{
  id: 'movie-21',
  title: 'Django Unchained',
  year: 2012,
  duration: 165,
  rating: '8.4',
  poster: 'https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg',
  genres: ['Drama', 'Western'],
  description: 'A freed slave sets out to rescue his wife.',
  summary: 'A violent quest for justice in the Old South.',
  cast: ['Jamie Foxx', 'Christoph Waltz'],
  languages: ['English'],
  director: 'Quentin Tarantino',
  producer: 'Columbia Pictures',
  download: 'https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg',
  trailer: 'https://www.youtube.com/watch?v=0fUCuvNlOCg',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg' }
  ],
  scenes: ['Mandingo fight', 'Final shootout'],
  similar: []
},

{
  id: 'movie-22',
  title: 'The Wolf of Wall Street',
  year: 2013,
  duration: 180,
  rating: '8.2',
  poster: 'https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg',
  genres: ['Drama', 'Crime'],
  description: 'A wild rise and fall on Wall Street.',
  summary: 'A stockbroker indulges in excess.',
  cast: ['Leonardo DiCaprio'],
  languages: ['English'],
  director: 'Martin Scorsese',
  producer: 'Red Granite Pictures',
  download: 'https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg',
  trailer: 'https://www.youtube.com/watch?v=iszwuX1AK6A',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg' }
  ],
  scenes: ['Quaalude crawl', 'FBI yacht'],
  similar: []
},

{
  id: 'movie-23',
  title: 'The Silence of the Lambs',
  year: 1991,
  duration: 118,
  rating: '8.6',
  poster: 'https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg',
  genres: ['Thriller', 'Crime'],
  description: 'A chilling psychological thriller.',
  summary: 'An FBI trainee seeks help from a cannibal.',
  cast: ['Jodie Foster', 'Anthony Hopkins'],
  languages: ['English'],
  director: 'Jonathan Demme',
  producer: 'Orion Pictures',
  download: 'https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg',
  trailer: 'https://www.youtube.com/watch?v=W6Mm8Sbe__o',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg' }
  ],
  scenes: ['Prison interview', 'Basement finale'],
  similar: []
},

{
  id: 'movie-24',
  title: 'Saving Private Ryan',
  year: 1998,
  duration: 169,
  rating: '8.6',
  poster: 'https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg',
  genres: ['Drama', 'War'],
  description: 'A realistic portrayal of WWII combat.',
  summary: 'Soldiers search for a paratrooper.',
  cast: ['Tom Hanks', 'Matt Damon'],
  languages: ['English'],
  director: 'Steven Spielberg',
  producer: 'DreamWorks',
  download: 'https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg',
  trailer: 'https://www.youtube.com/watch?v=vwAxi4A8Dkg',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg' }
  ],
  scenes: ['D-Day landing', 'Bridge defense'],
  similar: []
},

{
  id: 'movie-25',
  title: 'Se7en',
  year: 1995,
  duration: 127,
  rating: '8.6',
  poster: 'https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg',
  genres: ['Crime', 'Thriller'],
  description: 'A serial killer uses the seven deadly sins.',
  summary: 'Detectives hunt a sadistic murderer.',
  cast: ['Brad Pitt', 'Morgan Freeman'],
  languages: ['English'],
  director: 'David Fincher',
  producer: 'New Line Cinema',
  download: 'https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg',
  trailer: 'https://www.youtube.com/watch?v=znmZoVkCjpI',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg' }
  ],
  scenes: ['Sloth victim', 'Box ending'],
  similar: []
},

{
  id: 'movie-26',
  title: 'Goodfellas',
  year: 1990,
  duration: 146,
  rating: '8.7',
  poster: 'https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
  genres: ['Crime', 'Drama'],
  description: 'The rise and fall of a mob associate.',
  summary: 'A gangster’s life spirals out of control.',
  cast: ['Ray Liotta', 'Joe Pesci'],
  languages: ['English'],
  director: 'Martin Scorsese',
  producer: 'Warner Bros.',
  download: 'https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
  trailer: 'https://www.youtube.com/watch?v=qo5jJpHtI1Y',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg' }
  ],
  scenes: ['Copacabana tracking shot', 'Final arrest'],
  similar: []
},

{
  id: 'movie-27',
  title: 'The Departed',
  year: 2006,
  duration: 151,
  rating: '8.5',
  poster: 'https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg',
  genres: ['Crime', 'Drama'],
  description: 'An undercover war between cops and mob.',
  summary: 'Two moles try to expose each other.',
  cast: ['Leonardo DiCaprio', 'Matt Damon'],
  languages: ['English'],
  director: 'Martin Scorsese',
  producer: 'Warner Bros.',
  download: 'https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg',
  trailer: 'https://www.youtube.com/watch?v=iojhqm0JTW4',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg' }
  ],
  scenes: ['Elevator scene', 'Final rooftop'],
  similar: []
},

{
  id: 'movie-28',
  title: 'The Truman Show',
  year: 1998,
  duration: 103,
  rating: '8.2',
  poster: 'https://image.tmdb.org/t/p/w500/vuza0WqY239yBXOadKlGwJsZJFE.jpg',
  genres: ['Drama', 'Comedy'],
  description: 'A man unknowingly lives in a TV show.',
  summary: 'Truman begins to question reality.',
  cast: ['Jim Carrey'],
  languages: ['English'],
  director: 'Peter Weir',
  producer: 'Paramount Pictures',
  download: 'https://image.tmdb.org/t/p/w500/vuza0WqY239yBXOadKlGwJsZJFE.jpg',
  trailer: 'https://www.youtube.com/watch?v=dlnmQbPGuls',
  downloads: [
    { label: '720p', url: 'https://image.tmdb.org/t/p/w500/vuza0WqY239yBXOadKlGwJsZJFE.jpg' },
    { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/vuza0WqY239yBXOadKlGwJsZJFE.jpg' }
  ],
  scenes: ['Studio reveal', 'Boat escape'],
  similar: []
},

// {
//   id: 'movie-30',
//   title: 'Schindler’s List',
//   year: 1993,
//   duration: 195,
//   rating: '9.0',
//   poster: 'https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',
//   genres: ['Drama', 'History'],
//   description: 'A harrowing story of humanity during the Holocaust.',
//   summary: 'A businessman saves Jewish lives.',
//   cast: ['Liam Neeson', 'Ralph Fiennes'],
//   languages: ['English'],
//   director: 'Steven Spielberg',
//   producer: 'Universal Pictures',
//   download: '../assets/images/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',
//   trailer: 'https://www.youtube.com/watch?v=gG22XNhtnoY',
//   downloads: [
//     { label: '720p', url: 'https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg' },
//     { label: '1080p', url: 'https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg' }
//   ],
//   scenes: ['Ghetto liquidation', 'Final farewell'],
//   similar: []
//     },

//     {
//   id: 'movie-31',
//   title: 'The Silent Shore',
//   year: 2021,
//   duration: 112,
//   rating: '8.2',
//   poster: '../assets/images/medium-joker-movie-poster-for-room-office-13-inch-x-19-inch-original-imafk9kg4hczamuz.jpeg',
//   genres: ['Drama', 'Mystery'],
//   description: 'A dramatic mystery set in a quiet coastal town where a devastating storm exposes secrets buried for decades.',
//   summary: 'After a tragic storm, a retired fisherman uncovers clues connected to a long-forgotten disappearance.',
//   cast: ['Ellen Page', 'Mark Strong', 'Rita Moreno'],
//   languages: ['English', 'French'],
//   director: 'Andrew Collins',
//   producer: 'Blue Wave Studios',
//   download: '../assets/images/medium-joker-movie-poster-for-room-office-13-inch-x-19-inch-original-imafk9kg4hczamuz.jpeg',
//   trailer: 'https://example.com/trailer1',
//   downloads: [
//     { label: '720p', url: '../assets/images/medium-joker-movie-poster-for-room-office-13-inch-x-19-inch-original-imafk9kg4hczamuz.jpeg' },
//     { label: '1080p', url: '../assets/images/medium-joker-movie-poster-for-room-office-13-inch-x-19-inch-original-imafk9kg4hczamuz.jpeg' }
//   ],
//   scenes: ['Opening storm', 'Harbor discovery', 'Final confession'],
//   similar: [
//     { title: 'Coastal Secrets', poster: '../assets/images/images-w1400.jpg', id: 'similar-1' }
//   ]
// },
// {
//   id: 'movie-32',
//   title: 'Black-Panther',
//   year: 2019,
//   duration: 98,
//   rating: '7.5',
//   poster: '../assets/images/Black-Panther-Vintage-Movie-Poster-Original_b866a09e.jpg',
//   genres: ['Action', 'Thriller'],
//   description: 'A tense action thriller following an ex-con caught between criminal forces and his past mistakes.',
//   summary: 'An ex-con attempts one final job to secure his daughter’s future.',
//   cast: ['John Doe', 'Jane Roe', 'Michael Trent'],
//   languages: ['English'],
//   director: 'Ryan Chase',
//   producer: 'Neon Street Pictures',
//   download: '../assets/images/Black-Panther-Vintage-Movie-Poster-Original_b866a09e.jpg',
//   trailer: 'https://example.com/trailer2',
//   downloads: [
//     { label: '720p', url: '../assets/images/Black-Panther-Vintage-Movie-Poster-Original_b866a09e.jpg' }
//   ],
//   scenes: ['Alley chase', 'Highway escape', 'Warehouse showdown'],
//   similar: []
// },
// {
//   id: 'movie-33',
//   title: 'Starlit Melody',
//   year: 2023,
//   duration: 125,
//   rating: '8.9',
//   poster: '../assets/images/movie-film-festival-poster-template-600w-2496748687.jpg',
//   genres: ['Romance', 'Music'],
//   description: 'A rising musician balances love, ambition, and fame while touring intimate venues.',
//   summary: 'A heartfelt musical about passion, sacrifice, and finding one’s voice.',
//   cast: ['Alice Beats', 'Victor Song', 'Lena Cruz'],
//   languages: ['English', 'Spanish'],
//   director: 'Sophia Martinez',
//   producer: 'Harmony Films',
//   download: '../assets/images/movie-film-festival-poster-template-600w-2496748687.jpg',
//   trailer: 'https://example.com/trailer3',
//   downloads: [
//     { label: '1080p', url: '../assets/images/movie-film-festival-poster-template-600w-2496748687.jpg' }
//   ],
//   scenes: ['Open mic night', 'Tour montage', 'Final concert'],
//   similar: []
// },
// {
//   id: 'movie-34',
//   title: 'Vintage Noir',
//   year: 1952,
//   duration: 103,
//   rating: '7.9',
//   poster: '../assets/images/images-w1400.jpg',
//   genres: ['Noir', 'Crime'],
//   description: 'A classic noir tale of deception, betrayal, and moral ambiguity.',
//   summary: 'A private detective becomes entangled in a dangerous conspiracy.',
//   cast: ['Robert Hale', 'Clara Vance'],
//   languages: ['English'],
//   director: 'Howard Mills',
//   producer: 'Silver Screen Classics',
//   download: '../assets/images/images-w1400.jpg',
//   trailer: '',
//   downloads: [{ label: '720p', url: '../assets/images/images-w1400.jpg' }],
//   scenes: ['Interrogation room', 'Rainy alley', 'Final confrontation'],
//   similar: []
// },
// {
//   id: 'movie-35',
//   title: 'Mountainscape',
//   year: 2022,
//   duration: 97,
//   rating: '7.3',
//   poster: '../assets/images/71u4ibuAdsL._AC_SL1500_.jpg',
//   genres: ['Documentary'],
//   description: 'A breathtaking documentary exploring remote mountain ecosystems.',
//   summary: 'An immersive journey into high-altitude wilderness.',
//   cast: ['Narrated by David Stone'],
//   languages: ['English'],
//   director: 'Emily Hart',
//   producer: 'Nature Lens',
//   download: '../assets/images/71u4ibuAdsL._AC_SL1500_.jpg',
//   trailer: 'https://example.com/trailer4',
//   downloads: [{ label: '1080p', url: '../assets/images/71u4ibuAdsL._AC_SL1500_.jpg' }],
//   scenes: ['Sunrise over peaks', 'Climber ascent', 'Wildlife footage'],
//   similar: []
// },
// {
//   id: 'movie-36',
//   title: 'Horror Nights',
//   year: 2018,
//   duration: 110,
//   rating: '6.8',
//   poster: '../assets/images/644212fe844c5669660de689-scream-poster-horror-movie-posters.jpg',
//   genres: ['Horror'],
//   description: 'A group of friends face supernatural terror in an abandoned asylum.',
//   summary: 'Night turns deadly as ancient evil awakens.',
//   cast: ['Sarah Lane', 'Tom Reeves'],
//   languages: ['English'],
//   director: 'Marcus Black',
//   producer: 'Dark Room Productions',
//   download: '../assets/images/644212fe844c5669660de689-scream-poster-horror-movie-posters.jpg',
//   trailer: 'https://example.com/trailer5',
//   downloads: [{ label: '720p', url: '../assets/images/644212fe844c5669660de689-scream-poster-horror-movie-posters.jpg' }],
//   scenes: ['Asylum entry', 'Possession scene', 'Final escape'],
//   similar: []
// },
// {
//   id: 'movie-37',
//   title: 'Episode 9',
//   year: 2020,
//   duration: 142,
//   rating: '8.0',
//   poster: '../assets/images/episode9bb.jpg',
//   genres: ['Sci-Fi', 'Adventure'],
//   description: 'A futuristic saga reaching its climactic conclusion.',
//   summary: 'Heroes confront destiny in a galaxy-spanning conflict.',
//   cast: ['Leo Grant', 'Nina Vox'],
//   languages: ['English'],
//   director: 'Alan Frost',
//   producer: 'Nova Studios',
//   download: '../assets/images/episode9bb.jpg',
//   trailer: 'https://example.com/trailer6',
//   downloads: [{ label: '1080p', url: '../assets/images/episode9bb.jpg' }],
//   scenes: ['Space battle', 'Final duel', 'Epilogue'],
//   similar: []
// },
// {
//   id: 'movie-38',
//   title: 'Portrait',
//   year: 2024,
//   duration: 95,
//   rating: '7.6',
//   poster: '../assets/images/gettyimages-1755786284-612x612.jpg',
//   genres: ['Drama'],
//   description: 'An intimate character study of an artist confronting her past.',
//   summary: 'A painter revisits memories that shaped her identity.',
//   cast: ['Emma Rhodes'],
//   languages: ['English'],
//   director: 'Laura Bennett',
//   producer: 'Indie Frame',
//   download: '../assets/images/gettyimages-1755786284-612x612.jpg',
//   trailer: 'https://example.com/trailer7',
//   downloads: [{ label: '720p', url: '../assets/images/gettyimages-1755786284-612x612.jpg' }],
//   scenes: ['Studio reflection', 'Gallery opening', 'Silent finale'],
//   similar: []
// }



//   {
//     id: 'movie-1',
//     title: 'The Silent Shore',
//     year: 2021,
//     duration: 112,
//     rating: '8.2',
//     poster: '../assets/images/medium-joker-movie-poster-for-room-office-13-inch-x-19-inch-original-imafk9kg4hczamuz.jpeg',
//     genres: ['Drama', 'Mystery'],
//     description: 'A moving tale of loss, discovery and a small coastal town that hides a big secret.',
//     summary: 'After a tragic storm, a retired fisherman discovers clues that link his town to a decades-old disappearance.',
//     cast: ['Ellen Page', 'Mark Strong', 'Rita Moreno'],
//     languages: ['English', 'French'],
//     director: 'A. Director',
//     producer: 'Big Studio',
//     download: '../assets/images/medium-joker-movie-poster-for-room-office-13-inch-x-19-inch-original-imafk9kg4hczamuz.jpeg',
//     trailer: 'https://example.com/trailer1',
//     downloads: [{ label: '720p', url: '#' }, { label: '1080p', url: '#' }],
//     scenes: ['Opening storm scene', 'Midpoint confrontation', 'Final reveal'],
//     similar: [
//       { title: 'Coastal Secrets', poster: '../assets/images/images-w1400.jpg', id: 'similar-1' },
//       { title: 'Harbor Light', poster: '../assets/images/71u4ibuAdsL._AC_SL1500_.jpg', id: 'similar-2' }
//     ]
//   },
//   {
//     id: 'movie-2',
//     title: 'Midnight Runaway',
//     year: 2019,
//     duration: 98,
//     rating: '7.5',
//     poster: '../assets/images/Black-Panther-Vintage-Movie-Poster-Original_b866a09e.jpg',
//     genres: ['Action', 'Thriller'],
//     description: "An ex-con tries one last score to secure his daughter's future but things go sideways.",
//     summary: 'Fast paced heist thriller across neon cityscapes.',
//     cast: ['John Doe', 'Jane Roe'],
//     languages: ['English'],
//     director: 'R. Chase',
//     trailer: 'https://example.com/trailer2',
//     downloads: [{ label: '480p', url: '#' }],
//     scenes: ['Alley chase', 'Bank vault break'],
//     similar: []
//   },
//   {
//     id: 'movie-3',
//     title: 'Starlit Melody',
//     year: 2023,
//     duration: 125,
//     rating: '8.9',
//     poster: '../assets/images/movie-film-festival-poster-template-600w-2496748687.jpg',
//     genres: ['Romance', 'Music'],
//     description: 'A young musician finds fame and an unlikely love while touring small venues.',
//     summary: 'A heartfelt musical about ambition and the costs of fame.',
//     cast: ['Alice Beats', 'Victor Song'],
//     languages: ['English', 'Spanish'],
//     trailer: 'https://example.com/trailer3',
//     similar: []
//   },
//   { id: 'movie-4', title: 'Vintage Noir', year: 1952, duration: 103, poster: '../assets/images/images-w1400.jpg', genres: ['Noir'], trailer: '', similar: [] },
//   { id: 'movie-5', title: 'Mountainscape', year: 2022, duration: 97, poster: '../assets/images/71u4ibuAdsL._AC_SL1500_.jpg', genres: ['Documentary'], similar: [] },
//   { id: 'movie-6', title: 'Horror Nights', year: 2018, duration: 110, poster: '../assets/images/644212fe844c5669660de689-scream-poster-horror-movie-posters.jpg', genres: ['Horror'], similar: [] },
//   { id: 'movie-7', title: 'Episode 9', year: 2020, duration: 142, poster: '../assets/images/episode9bb.jpg', genres: ['Sci-fi'], similar: [] },
//   { id: 'movie-8', title: 'Portrait', year: 2024, duration: 95, poster: '../assets/images/gettyimages-1755786284-612x612.jpg', genres: ['Drama'], similar: [] }
];

// Render demo gallery using helper from generate-details.js
// This will run once the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
    if (window.renderDemo) {
        renderDemo('gallery', demoMovies);
    }
});