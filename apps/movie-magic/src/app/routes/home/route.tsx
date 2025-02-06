import type { ListMoviesResponse } from '../../../gen/movie/v1/movie_pb';
import { MovieService, SortParam } from '../../../gen/movie/v1/movie_pb';
import { MovieList } from '@/components/MovieList';
import { useClient } from '@/hooks/useClient';
import { useEffect, useState } from 'react';

export function HomePage() {
  const movieService = useClient(MovieService);
  const [moviesResponse, setMoviesResponse] = useState<ListMoviesResponse>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const listMoviesResponse = await movieService.listMovies({
          sort: SortParam.RANK_ASC,
          pageSpec: { page: 1, perPage: 10 },
        });
        setMoviesResponse(listMoviesResponse);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError('Error fetching movies');
        setLoading(false);
      }
    };

    void fetchMovies();
  }, [movieService]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="size-8 animate-spin rounded-full border-b-2 border-gray-900" />
      </div>
    );
  }

  if (error !== undefined) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  if (moviesResponse === undefined) {
    return undefined;
  }

  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="mb-6">
        <h1 className="mb-2 text-3xl font-bold">Top 10 Movies Of All Time</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <MovieList movies={moviesResponse.movies} />
      </div>
    </div>
  );
}
