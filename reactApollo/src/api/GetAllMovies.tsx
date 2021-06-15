import { gql } from "@apollo/client";

export const GetAllMovies = gql`
  query moviesQury {
    movies {
      id
      name
      genre
      rate
      director {
        name
      }
    }
  }
`;
