const graphql = require("graphql");

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = graphql;

const movie = [
  { id: "1", name: "Pulp Fiction", genre: `Crime` },
  { id: "2", name: "1984", genre: `Sci-Fi` },
  { id: 3, name: "V for vendetta", genre: `Sci-Fi-Triller` },
  { id: 4, name: "Snath", genre: `Crime-Comedy` },
];

const directors = [
  { id: "1", name: "Quentin Tarantino", age: 55 },
  { id: "2", name: "Michael Radford", age: 72 },
  { id: "3", name: "James McTeigue", age: 51 },
  { id: "4", name: "Guy Rithie", age: 50 },
];

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const DirectorsType = new GraphQLObjectType({
  name: "Directors",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return movie.find((movie) => movie.id == args.id);
      },
    },
    directors: {
      type: DirectorsType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return directors.find((director) => director.id == args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
