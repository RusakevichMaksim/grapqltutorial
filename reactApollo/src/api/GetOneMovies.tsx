import { gql } from "@apollo/client";

export const GetOneMovies = gql`
  query moviesQury($id: ID) {
    movie(id: $id) {
      name
    }
  }
`;
