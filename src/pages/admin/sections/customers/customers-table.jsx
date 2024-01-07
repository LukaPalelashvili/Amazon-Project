import { format } from "date-fns";
import {
  Avatar,
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { getInitials } from "../../utils/get-initials.js";
import { error, success } from "../../../../theme/colors.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CustomersTable = (props) => {
  const { items = [], selected = [] } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/admin/customers/edit/${id}`);
  };

  const handleDeleteClick = (id) => {
    setSelectedUserId(id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmDelete = async () => {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/users/${selectedUserId}`,
      {
        method: "DELETE",
      },
    );

    if (response.ok) {
      const newItems = items.filter(({ id }) => id !== selectedUserId);
      setSelectedUserId(null);
    }
    setOpenDialog(false);
  };

  return (
    <Card>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Signed Up</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(({ id, name, email, avatar, role, creationAt }) => {
              const isSelected = selected.includes(id);
              const createdAt = format(creationAt, "dd/MM/yyyy");

              return (
                <TableRow hover key={id} selected={isSelected}>
                  <TableCell>{id}</TableCell>
                  <TableCell>
                    <Stack alignItems="center" direction="row" spacing={2}>
                      <Avatar src={avatar}>{getInitials(name)}</Avatar>
                      <Typography variant="subtitle2">{name}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{email}</TableCell>
                  <TableCell>{role}</TableCell>
                  <TableCell>{createdAt}</TableCell>
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
              );
            })}
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
            Are you sure you want to delete this user?
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
