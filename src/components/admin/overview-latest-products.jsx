import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  IconButton,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { success } from "../../theme/colors.js";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const OverviewLatestProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=15")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);

  const handleViewAll = () => {
    navigate("/admin/products");
  };

  const handleEdit = (productId) => {
    navigate(`/admin/products/edit/${productId}`);
  };

  return (
    <Card sx={{ height: "100%" }}>
      <CardHeader title="Latest Products" />
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(({ id, brand, price, category }) => {
              return (
                <TableRow hover key={id}>
                  <TableCell>{id}</TableCell>
                  <TableCell>{brand}</TableCell>
                  <TableCell>${price}</TableCell>
                  <TableCell>{category}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <IconButton
                        onClick={() => handleEdit(id)}
                        aria-label="edit"
                        size="small"
                        sx={{
                          color: success.main,
                          "&:hover": { backgroundColor: success.alpha8 },
                        }}
                      >
                        <VisibilityIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
          variant="text"
          onClick={handleViewAll}
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};
