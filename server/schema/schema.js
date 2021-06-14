const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;
const Movies = require("../models/movie");
const Directors = require("../models/director");

// const movies = [
//   {
//     id: "1",
//     name: "Pulp Fiction",
//     genre: "Crime",
//     directorId: "60c7221bfc1298b7dd4d25c9",
//   },
//   {
//     id: "2",
//     name: "1984",
//     genre: "Sci-Fi",
//     directorId: "60c72256fc1298b7dd4d25ca",
//   },
//   {
//     id: "3",
//     name: "V for vendetta",
//     genre: "Sci-Fi-Triller",
//     directorId: "60c722b5fc1298b7dd4d25cb",
//   },
//   {
//     id: "4",
//     name: "Snatch",
//     genre: "Crime-Comedy",
//     directorId: "60c722ecfc1298b7dd4d25cd",
//   },
//   {
//     id: "5",
//     name: "Reservoir Dogs",
//     genre: "Crime",
//     directorId: "60c7221bfc1298b7dd4d25c9",
//   },
//   {
//     id: "6",
//     name: "The Hateful Eight",
//     genre: "Crime",
//     directorId: "60c7221bfc1298b7dd4d25c9",
//   },
//   {
//     id: "7",
//     name: "Inglourious Basterds",
//     genre: "Crime",
//     directorId: "60c7221bfc1298b7dd4d25c9",
//   },
//   {
//     id: "7",
//     name: "Lock, Stock and Two Smoking Barrels",
//     genre: "Crime-Comedy",
//     directorId: "60c722ecfc1298b7dd4d25cd",
//   },
// ];

// const directors = [
//   { id: "1", name: "Quentin Tarantino", age: 55 }, //60c7221bfc1298b7dd4d25c9
//   { id: "2", name: "Michael Radford", age: 72 }, //60c72256fc1298b7dd4d25ca
//   { id: "3", name: "James McTeigue", age: 51 }, //60c722b5fc1298b7dd4d25cb
//   { id: "4", name: "Guy Ritchie", age: 50 }, //60c722ecfc1298b7dd4d25cd
// ];

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    director: {
      type: DirectorType,
      resolve(parent, args) {
        return directors.find((director) => director.id === parent.id);
      },
    },
  }),
});

const DirectorType = new GraphQLObjectType({
  name: "Director",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return movies.filter((movie) => movie.directorId === parent.id);
      },
    },
  }),
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return movies.find((movie) => movie.id === args.id);
      },
    },
    director: {
      type: DirectorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return directors.find((director) => director.id === args.id);
      },
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return movies;
      },
    },
    directors: {
      type: new GraphQLList(DirectorType),
      resolve(parent, args) {
        return directors;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});