import { useQuery } from "@apollo/client";
import { GetAllMovies } from "../api/GetAllMovies";

const box = {
  border: "1px solid red",
  width: "300px",
  height: "200px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column" as "column",
};

const boxWrapper = {
  display: "flex",
  juctifycontent: "center",
  alignItems: "center",
  flexWrap: "wrap" as "wrap",
};

const Card = () => {
  const { data, loading } = useQuery(GetAllMovies);
  if (loading) return <div>loading...</div>;

  console.log(data);

  return (
    <div style={boxWrapper}>
      {data.movies.map((movie: any) => {
        return (
          <div key={movie.name} style={box}>
            <p>{movie.id}</p>
            <p>{movie.name}</p>
            <p>{movie.genre}</p>
            <p>{movie.rate}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
