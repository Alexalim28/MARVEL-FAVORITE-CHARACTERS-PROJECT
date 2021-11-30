import React, { useContext } from "react";
import CharacterContext from "../CharacterContext";
import { Box } from "@mui/system";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

function Favorites() {
  const { favorites, total } = useContext(CharacterContext);

  return !total ? (
    <Box sx={{ mt: "200px", width: "50%", mx: "auto", textAlign: "center" }}>
      <Typography variant="h2">
        You didn't add any favorite character!
      </Typography>
    </Box>
  ) : (
    <Container sx={{ mt: 5 }}>
      {favorites.map((character, idx) => (
        <Card
          key={idx}
          sx={{
            maxWidth: "500px",
            minHeight: "350px",
            px: 3,
            py: 1,
            margin: "50px auto",
            boxShadow: "10px 12px 1px 3px red",
            backgroundColor: "#000",
            color: "#fff",
          }}
        >
          <CardHeader title={character.name} />
          <CardMedia
            component="img"
            height="180"
            image={character.image}
            alt="character image"
          />
          <CardContent>{character.description}</CardContent>
          <CardActions>
            <Button size="small" href={character.detailsUrl} target="_blank">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
}

export default Favorites;
