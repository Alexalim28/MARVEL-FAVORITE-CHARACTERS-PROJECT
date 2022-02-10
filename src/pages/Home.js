import React, { useState, useEffect } from "react";
import { Container, Grid, CircularProgress, Stack } from "@mui/material";
import MarvelCard from "../components/MarvelCard";

const hash = process.env.HASH;
const apikey = process.env.API_KEY;
const url = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`;

function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setCharacters(data.data.results);
      setLoading(false);
    };
    fetchCharacters();
  }, []);

  return loading ? (
    <Stack sx={{ my: "300px", mx: "650px" }} spacing={2} direction="row">
      <CircularProgress size={100} thickness={5} />
      <CircularProgress size={100} thickness={5} />
      <CircularProgress size={100} thickness={5} />
    </Stack>
  ) : (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={3}>
        {characters.map((character) => {
          const { id, name, description, thumbnail, urls } = character;
          return (
            <Grid item xs={12} md={4} key={id}>
              <MarvelCard
                id={id}
                name={name}
                description={description || "No description available"}
                image={thumbnail}
                urls={urls}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Home;
