import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { format } from "date-fns";
import { ucFirst } from "../../../../helpers/index.js";

const styles = {
  avatar: {
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

export const AccountProfile = ({ name, role, avatar, createdAt }) => {
  const formattedDate = format(createdAt || Date(), "MMM dd yyyy HH:mm");

  return (
    <Card>
      <CardContent>
        <Box sx={styles.box}>
          <Avatar src={avatar} sx={styles.avatar} />
          {name && (
            <Typography gutterBottom variant="h5">
              {ucFirst(name)}
            </Typography>
          )}
          {role && (
            <Typography color="text.secondary" variant="body2">
              Role: {ucFirst(role)}
            </Typography>
          )}
          <Typography color="text.secondary" variant="body2">
            Updated at: {formattedDate}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
