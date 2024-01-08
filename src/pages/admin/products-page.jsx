import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Skeleton,
  Stack,
  Typography,
  Grid,
} from "@mui/material";
import { Layout } from "./layout/dashboard/layout.jsx";
import { ProductProfile } from "./sections/products/product-profile.jsx";
import { ProductDetailsForm } from "./sections/products/product-detail-form.jsx";
import { useParams } from "react-router-dom";

const SkeletonLoader = ({ width, height }) => (
  <Skeleton variant="rectangular" width={width} height={height} />
);

const ProductPage = ({ mode = "update" }) => {
  const [productData, setProductData] = useState(
    mode === "create"
      ? {
          title: "",
          price: "",
          description: "",
          images: [],
          category: "",
        }
      : {},
  );
  const [isLoading, setIsLoading] = useState(mode === "update");

  const { id: productId } = useParams();

  useEffect(() => {
    if (mode === "update") {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://dummyjson.com/products/${productId}`,
          );
          const data = await response.json();
          setProductData(data);
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
    <Layout>
      <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <Typography variant="h4">Product</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={5}>
                {isLoading ? (
                  <SkeletonLoader width={400} height={250} />
                ) : (
                  <ProductProfile {...productData} />
                )}
              </Grid>
              <Grid item xs={12} md={6} lg={7}>
                {isLoading ? (
                  <SkeletonLoader width={600} height={400} />
                ) : (
                  <ProductDetailsForm product={productData} mode={mode} />
                )}
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </Layout>
  );
};

export default ProductPage;
