import React, { useCallback, useEffect, useState } from "react";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { Layout } from "./layout/dashboard/layout.jsx";
import { ProductsSearch } from "./sections/products/products-search.jsx";
import { ProductsTable } from "./sections/products/products-table.jsx";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const handlePageChange = useCallback((event, newPage) => {
    setPage(newPage);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }, []);

  const handleAddClick = () => {
    navigate(`/admin/products/add`);
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.products);
        setProducts(res.products);
      });
  }, [page, rowsPerPage]);

  return (
    <Layout>
      <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Typography variant="h4">Products</Typography>
              <Button
                startIcon={
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                }
                onClick={() => handleAddClick()}
                variant="contained"
              >
                Add
              </Button>
            </Stack>
            <ProductsSearch />
            <ProductsTable
              count={data.length}
              items={products}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              page={page}
              rowsPerPage={rowsPerPage}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </Stack>
        </Container>
      </Box>
    </Layout>
  );
};

export default Products;
