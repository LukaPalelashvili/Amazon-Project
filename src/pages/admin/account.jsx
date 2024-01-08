import {
  Box,
  Container,
  Skeleton,
  Stack,
  Typography,
  Grid,
} from "@mui/material";
import { Layout } from "./layout/dashboard/layout.jsx";
import { AccountProfile } from "./sections/account/account-profile.jsx";
import { AccountProfileDetails } from "./sections/account/account-profile-details.jsx";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext.js";
import { useParams } from "react-router-dom";

const SkeletonLoader = ({ width, height }) => (
  <Skeleton variant="rectangular" width={width} height={height} />
);

const Page = ({ mode, isAdmin }) => {
  const [userData, setUserData] = useState(
    mode === "create" ? { name: "", email: "", role: "", avatar: "" } : {},
  );
  const [isLoading, setIsLoading] = useState(mode === "update");
  const { user } = useContext(AuthContext);
  const params = useParams();

  let userId = isAdmin ? user.id : mode === "update" ? Number(params.id) : "";

  useEffect(() => {
    if (mode === "update") {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.escuelajs.co/api/v1/users/${userId}`,
          );
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error("Fetch error:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [mode]);

  return (
    <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography variant="h4">Account</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={5}>
              {isLoading ? (
                <SkeletonLoader width={400} height={250} />
              ) : (
                <AccountProfile {...userData} />
              )}
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
              {isLoading ? (
                <SkeletonLoader width={600} height={400} />
              ) : (
                <AccountProfileDetails user={userData} mode={mode} />
              )}
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

const Account = ({ mode = "create", isAdmin = false }) => (
  <Layout>
    <Page mode={mode} isAdmin={isAdmin} />
  </Layout>
);

export default Account;
