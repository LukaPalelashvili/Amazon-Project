import React, { useState } from "react";
import {
  Avatar,
  Box,
  Card,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  DialogActions,
  DialogContentText,
  DialogContent,
  DialogTitle,
  Dialog,
  Stack,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { success, error } from "../../../../theme/colors.js";
import { useNavigate } from "react-router-dom";

export const ProductsTable = ({ items, onDelete }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState(null);
  const navigate = useNavigate();

  const handleEdit = (productId) => {
    navigate(`/admin/products/edit/${productId}`);
  };

  const handleDeleteClick = (productId) => {
    setDeleteProductId(productId);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmDelete = () => {
    onDelete(deleteProductId);
    setOpenDialog(false);
  };

  return (
    <Card>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(
              ({ id, title, price, category, description, thumbnail }) => (
                <TableRow hover key={id}>
                  <TableCell>{id}</TableCell>
                  <TableCell>
                    <Avatar src={thumbnail} alt={title} />
                  </TableCell>
                  <TableCell>{title}</TableCell>
                  <TableCell>${price}</TableCell>
                  <TableCell>{category}</TableCell>
                  <TableCell>{description}</TableCell>
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
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        onClick={() => handleDeleteClick(id)}
                        size="small"
                        sx={{
                          color: error.main,
                          "&:hover": { backgroundColor: error.alpha8 },
                        }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </Box>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleConfirmDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};
