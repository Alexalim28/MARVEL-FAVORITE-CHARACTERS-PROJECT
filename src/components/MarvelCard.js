import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";
import React from "react";
import { useContext } from "react";
import CharacterContext from "../CharacterContext";

function MarvelCard({ id, name, description, image, urls }) {
  const thumbnailUrl = `${image.path}/portrait_xlarge.${image.extension}`;
  const detailsUrl = urls[0].url;

  const { addFavorite, removeFavorite, isFavoriteCharacter } =
    useContext(CharacterContext);

  let res = isFavoriteCharacter(id);

  const handleClick = (id) => {
    if (res) {
      removeFavorite(id);
    } else {
      addFavorite(id, name, description, thumbnailUrl, detailsUrl);
    }
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: "350px",
          minHeight: "400px",
          px: 3,
          py: 1,
          boxShadow: "10px 12px 1px 3px red",
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        <CardHeader title={name} />
        <CardMedia
          component="img"
          height="180"
          image={thumbnailUrl}
          alt="character image"
        />
        <CardContent>{description.slice(0, 100)}...</CardContent>
        <CardActions>
          <Button size="small" href={detailsUrl} target="_blank">
            Learn More
          </Button>

          <Button
            size="small"
            sx={{ backgroundColor: "#fff", ml: "auto" }}
            onClick={() => handleClick(id)}
          >
            {res ? "Remove favorite" : "Add to favorites"}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default MarvelCard;
