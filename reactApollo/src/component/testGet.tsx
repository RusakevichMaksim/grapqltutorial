import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { GetOneMovies } from "../api/GetOneMovies";

const styl = { marginTop: "100px", padding: "30px" };

const Test = () => {
  const [idMovie, setIdMovie] = useState("");

  //   const {getC ,{data, loading} } = useLazyQuery(GetOneMovies, {
  //     variables: {
  //       id: "idMovie",
  //     },
  //   });
  const [getCountries, { loading, data }] = useLazyQuery(GetOneMovies, {
    variables: {
      id: idMovie,
    },
  });
  console.log(data);
  return (
    <div style={styl}>
      {data ? data.movie.name : "none"}
      <input
        type="text"
        value={idMovie}
        onChange={(e) => setIdMovie(e.target.value)}
      />
      <button
        onClick={() => {
          getCountries();
        }}
      >
        click
      </button>
    </div>
  );
};

export default Test;
