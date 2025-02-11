// import { MOVIE_REQUEST_URL } from '../utils/constants';
import { movies } from '../mocks/movies';
import { MovieService } from '@/gen/movie/v1/movie_pb';
import type { DescService } from '@bufbuild/protobuf';
import type { Client } from '@connectrpc/connect';
import { createRouterTransport, createClient } from '@connectrpc/connect';
// import { createGrpcWebTransport } from '@connectrpc/connect-web';

import { useMemo } from 'react';

// const transport = createGrpcWebTransport({
//   baseUrl: MOVIE_REQUEST_URL,
// });

// mock transport
const transport = createRouterTransport(({ service }) => {
  service(MovieService, {
    listMovies: () => ({
      movies,
      total: movies.length,
    }),
  });
});

/**
 * Get a promise client for the given service.
 */
export function useClient<T extends DescService>(service: T): Client<T> {
  // We memoize the client, so that we only create one instance per service.
  return useMemo(() => createClient(service, transport), [service]);
}
