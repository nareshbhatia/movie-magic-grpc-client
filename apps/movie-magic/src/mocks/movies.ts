import type { Movie } from '@/gen/models/movie/v1/movie_pb';
import { Certificate } from '@/gen/models/movie/v1/movie_pb';

export const movies: Movie[] = [
  {
    $typeName: 'models.movie.v1.Movie',
    id: 'tt0111161',
    name: 'The Shawshank Redemption',
    description:
      'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
    cast: [
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0000209',
        characters: ['Andy Dufresne'],
      },
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0000151',
        characters: ["Ellis Boyd 'Red' Redding"],
      },
    ],
    certificate: Certificate.R,
    genres: ['Drama'],
    image: {
      $typeName: 'models.common.v1.Image',
      url: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
      width: 1200,
      height: 1800,
    },
    rank: 1,
    ratingsSummary: {
      $typeName: 'models.movie.v1.RatingsSummary',
      aggregateRating: 9.3,
      voteCount: 2865906,
    },
    releaseYear: 1994,
    runtime: 8520,
    tagline: 'Fear can hold you prisoner. Hope can set you free.',
  },
  {
    $typeName: 'models.movie.v1.Movie',
    id: 'tt0068646',
    name: 'The Godfather',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    cast: [
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0000008',
        characters: ['Don Vito Corleone'],
      },
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0000199',
        characters: ['Michael Corleone'],
      },
    ],
    certificate: Certificate.R,
    genres: ['Crime', 'Drama'],
    image: {
      $typeName: 'models.common.v1.Image',
      url: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      width: 1396,
      height: 1982,
    },
    rank: 2,
    ratingsSummary: {
      $typeName: 'models.movie.v1.RatingsSummary',
      aggregateRating: 9.2,
      voteCount: 1996320,
    },
    releaseYear: 1972,
    runtime: 10500,
    tagline: "An offer you can't refuse.",
  },
  {
    $typeName: 'models.movie.v1.Movie',
    id: 'tt0468569',
    name: 'The Dark Knight',
    description:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    cast: [
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0000288',
        characters: ['Bruce Wayne', 'Batman'],
      },
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0005132',
        characters: ['Joker'],
      },
    ],
    certificate: Certificate.PG_13,
    genres: ['Action', 'Crime', 'Drama'],
    image: {
      $typeName: 'models.common.v1.Image',
      url: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
      width: 1383,
      height: 2048,
    },
    rank: 3,
    ratingsSummary: {
      $typeName: 'models.movie.v1.RatingsSummary',
      aggregateRating: 9,
      voteCount: 2847398,
    },
    releaseYear: 2008,
    runtime: 9120,
    tagline: 'Why So Serious?',
  },
  {
    $typeName: 'models.movie.v1.Movie',
    id: 'tt0071562',
    name: 'The Godfather Part II',
    description:
      'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
    cast: [
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0000199',
        characters: ['Michael'],
      },
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0000134',
        characters: ['Vito Corleone'],
      },
    ],
    certificate: Certificate.R,
    genres: ['Crime', 'Drama'],
    image: {
      $typeName: 'models.common.v1.Image',
      url: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      width: 1791,
      height: 2552,
    },
    rank: 4,
    ratingsSummary: {
      $typeName: 'models.movie.v1.RatingsSummary',
      aggregateRating: 9,
      voteCount: 1354458,
    },
    releaseYear: 1974,
    runtime: 12120,
    tagline: "All the power on earth can't change destiny.",
  },
  {
    $typeName: 'models.movie.v1.Movie',
    id: 'tt0050083',
    name: '12 Angry Men',
    description:
      'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.',
    cast: [
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0000020',
        characters: ['Juror 8'],
      },
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0002011',
        characters: ['Juror 3'],
      },
    ],
    certificate: Certificate.NR,
    genres: ['Crime', 'Drama'],
    image: {
      $typeName: 'models.common.v1.Image',
      url: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
      width: 974,
      height: 1500,
    },
    rank: 5,
    ratingsSummary: {
      $typeName: 'models.movie.v1.RatingsSummary',
      aggregateRating: 9,
      voteCount: 856677,
    },
    releaseYear: 1957,
    runtime: 5760,
    tagline: 'It explodes like 12 sticks of dynamite!',
  },
  {
    $typeName: 'models.movie.v1.Movie',
    id: 'tt0108052',
    name: "Schindler's List",
    description:
      'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
    cast: [
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0000553',
        characters: ['Oskar Schindler'],
      },
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0000146',
        characters: ['Amon Goeth'],
      },
    ],
    certificate: Certificate.R,
    genres: ['Biography', 'Drama', 'History'],
    image: {
      $typeName: 'models.common.v1.Image',
      url: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      width: 1600,
      height: 2400,
    },
    rank: 6,
    ratingsSummary: {
      $typeName: 'models.movie.v1.RatingsSummary',
      aggregateRating: 9,
      voteCount: 1439587,
    },
    releaseYear: 1993,
    runtime: 11700,
    tagline: 'Whoever saves one life, saves the world entire.',
  },
  {
    $typeName: 'models.movie.v1.Movie',
    id: 'tt0167260',
    name: 'The Lord of the Rings: The Return of the King',
    description:
      'Gandalf and Aragorn lead the World of Men against Sauron&apos;s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
    cast: [
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0000704',
        characters: ['Frodo'],
      },
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0001557',
        characters: ['Aragorn'],
      },
    ],
    certificate: Certificate.PG_13,
    genres: ['Action', 'Adventure', 'Drama'],
    image: {
      $typeName: 'models.common.v1.Image',
      url: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      width: 800,
      height: 1185,
    },
    rank: 7,
    ratingsSummary: {
      $typeName: 'models.movie.v1.RatingsSummary',
      aggregateRating: 9,
      voteCount: 1963008,
    },
    releaseYear: 2003,
    runtime: 12060,
    tagline: 'The eye of the enemy is moving.',
  },
  {
    $typeName: 'models.movie.v1.Movie',
    id: 'tt0110912',
    name: 'Pulp Fiction',
    description:
      'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    cast: [
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0000237',
        characters: ['Vincent Vega'],
      },
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0000235',
        characters: ['Mia Wallace'],
      },
    ],
    certificate: Certificate.R,
    genres: ['Crime', 'Drama'],
    image: {
      $typeName: 'models.common.v1.Image',
      url: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      width: 1055,
      height: 1536,
    },
    rank: 8,
    ratingsSummary: {
      $typeName: 'models.movie.v1.RatingsSummary',
      aggregateRating: 8.9,
      voteCount: 2200919,
    },
    releaseYear: 1994,
    runtime: 9240,
    tagline: "Girls like me don't make invitations like this to just anyone!",
  },
  {
    $typeName: 'models.movie.v1.Movie',
    id: 'tt0120737',
    name: 'The Lord of the Rings: The Fellowship of the Ring',
    description:
      'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    cast: [
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0000704',
        characters: ['Frodo'],
      },
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0005212',
        characters: ['Gandalf'],
      },
    ],
    certificate: Certificate.PG_13,
    genres: ['Action', 'Adventure', 'Drama'],
    image: {
      $typeName: 'models.common.v1.Image',
      url: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
      width: 1978,
      height: 2936,
    },
    rank: 9,
    ratingsSummary: {
      $typeName: 'models.movie.v1.RatingsSummary',
      aggregateRating: 8.9,
      voteCount: 1990970,
    },
    releaseYear: 2001,
    runtime: 10680,
    tagline: 'The Legend Comes to Life',
  },
  {
    $typeName: 'models.movie.v1.Movie',
    id: 'tt0060196',
    name: 'The Good, The Bad And The Ugly',
    description:
      'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.',
    cast: [
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0000142',
        characters: ['Blondie'],
      },
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0908919',
        characters: ['Tuco'],
      },
    ],
    certificate: Certificate.NR,
    genres: ['Adventure', 'Western'],
    image: {
      $typeName: 'models.common.v1.Image',
      url: 'https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg',
      width: 2001,
      height: 3000,
    },
    rank: 10,
    ratingsSummary: {
      $typeName: 'models.movie.v1.RatingsSummary',
      aggregateRating: 8.8,
      voteCount: 805769,
    },
    releaseYear: 1966,
    runtime: 10680,
    tagline:
      "They formed an alliance of hate to steal a fortune in dead man's gold",
  },
  {
    $typeName: 'models.movie.v1.Movie',
    id: 'tt15239678',
    name: 'Dune: Part Two',
    description:
      'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.',
    cast: [
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm3154303',
        characters: ['Paul Atreides'],
      },
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm3918035',
        characters: ['Chani'],
      },
    ],
    certificate: Certificate.PG_13,
    genres: ['Action', 'Adventure', 'Drama'],
    image: {
      $typeName: 'models.common.v1.Image',
      url: 'https://m.media-amazon.com/images/M/MV5BODI0YjNhNjUtYjM0My00MTUwLWFlYTMtMWI2NGUzYjNjNGQzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
      width: 2764,
      height: 4096,
    },
    rank: 11,
    ratingsSummary: {
      $typeName: 'models.movie.v1.RatingsSummary',
      aggregateRating: 9,
      voteCount: 113219,
    },
    releaseYear: 2024,
    runtime: 9960,
    tagline: 'Long live the fighters.',
  },
  {
    $typeName: 'models.movie.v1.Movie',
    id: 'tt0109830',
    name: 'Forrest Gump',
    description:
      'The history of the United States from the 1950s to the &apos;70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.',
    cast: [
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0000158',
        characters: ['Forrest Gump'],
      },
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0000705',
        characters: ['Jenny Curran'],
      },
    ],
    certificate: Certificate.PG_13,
    genres: ['Drama', 'Romance'],
    image: {
      $typeName: 'models.common.v1.Image',
      url: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
      width: 558,
      height: 809,
    },
    rank: 12,
    ratingsSummary: {
      $typeName: 'models.movie.v1.RatingsSummary',
      aggregateRating: 8.8,
      voteCount: 2237529,
    },
    releaseYear: 1994,
    runtime: 8520,
    tagline: 'The story of a lifetime.',
  },
  {
    $typeName: 'models.movie.v1.Movie',
    id: 'tt0167261',
    name: 'The Lord of the Rings: The Two Towers',
    description:
      'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron&apos;s new ally, Saruman, and his hordes of Isengard.',
    cast: [
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0000704',
        characters: ['Frodo'],
      },
      {
        $typeName: 'models.movie.v1.CastMember',
        personId: 'nm0005212',
        characters: ['Gandalf'],
      },
    ],
    certificate: Certificate.PG_13,
    genres: ['Action', 'Adventure', 'Drama'],
    image: {
      $typeName: 'models.common.v1.Image',
      url: 'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      width: 964,
      height: 1500,
    },
    rank: 13,
    ratingsSummary: {
      $typeName: 'models.movie.v1.RatingsSummary',
      aggregateRating: 8.8,
      voteCount: 1769828,
    },
    releaseYear: 2002,
    runtime: 10740,
    tagline: 'A New Power Is Rising.',
  },
];
