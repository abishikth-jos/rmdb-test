import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { MovieDetailsResponse } from "@/types";

import { MovieService } from "../services/movie-service";

type UseGetMovieDetailsProps = {
  queryParams: {
    movieId: number;
  };
  options?: UseQueryOptions<MovieDetailsResponse>;
};

export const useGetMovieDetails = ({
  queryParams,
  options
}: UseGetMovieDetailsProps) => {
  return useQuery({
    queryKey: ["movie_details", queryParams],
    queryFn: async () => {
      return await MovieService.getMovieDetails({
        movieId: queryParams?.movieId || null
      });
    },
    ...options
  });
};
