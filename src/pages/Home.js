import { Container, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import React, { useState, useEffect } from "react";
import MarvelCard from "../components/MarvelCard";

const hash = "5489fb426489612a566050653cfb69af";
const url = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a4fe8f656b34bf20fe3f04109c01baa7&hash=${hash}`;

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

  {
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
}

export default Home;
