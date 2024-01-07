import React from "react";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { format } from "date-fns";

const styles = {
  image: {
    height: 80,
    mb: 2,
    width: 80,
  },
  box: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
};

export const ProductProfile = ({ title, category, images, createdAt }) => {
  const formattedDate = format(new Date(), "MMM dd yyyy HH:mm");

  return (
    <Card>
      <CardContent>
        <Box sx={styles.box}>
          <Avatar src={images[0]} sx={styles.image} />
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Category: {category}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Created at: {formattedDate}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
