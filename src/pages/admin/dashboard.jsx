import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout } from "./layout/dashboard/layout.jsx";
import { OverviewLatestCustomers } from "../../components/admin/overview-latest-customers.jsx";
import { OverviewLatestProducts } from "../../components/admin/overview-latest-products.jsx";

const Page = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid xs={12} md={6} lg={4}>
            <OverviewLatestCustomers sx={{ height: "100%" }} />
          </Grid>
          <Grid xs={12} md={12} lg={8}>
            <OverviewLatestProducts />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

const Dashboard = () => <Layout>{<Page />}</Layout>;

export default Dashboard;
