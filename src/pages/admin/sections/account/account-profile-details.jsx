import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const roles = [
  { value: "admin", label: "Admin" },
  { value: "customer", label: "Customer" },
];

const schema = yup
  .object({
    name: yup.string().min(2, "Name must be at least 2 characters").required(),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    role: yup
      .string()
      .oneOf(["admin", "customer"], 'Role must be either "admin" or "customer"')
      .required(),
    avatar: yup
      .string()
      .url("Please enter a valid URL")
      .required("Avatar URL is required"),
    password: yup
      .string()
      .min(4, "Password must be at least 4 characters")
      .required("Password is required")
      .when("mode", {
        is: "create",
        then: yup.string().required("Password is required"),
      }),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .when("mode", {
        is: "create",
        then: yup.string().required("Password confirmation is required"),
      }),
  })
  .required();

export const AccountProfileDetails = ({ user, mode }) => {
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = useState({
    open: false,
    error: false,
    message: "",
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues:
      mode === "create"
        ? {
            name: "",
            email: "",
            role: "",
            avatar: "",
            password: "",
            passwordConfirmation: "",
          }
        : { ...user },
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const url = `https://api.escuelajs.co/api/v1/users/${
      mode === "update" ? user.id : ""
    }`;
    const method = mode === "create" ? "POST" : "PUT";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const responseData = await response.json();
        const messages = responseData.message;

        messages.forEach((message) => {
          const key = message.split(" ")[0].toLowerCase();
          setError(key, { type: "manual", message });
        });

        setSnackbar({
          open: true,
          error: true,
          message: "Error updating user",
        });

        return;
      }

      setSnackbar({
        open: true,
        error: false,
        message: `User ${
          mode === "create" ? "created" : "updated"
        } successfully`,
      });

      if (mode === "create") {
        navigate("/admin/customers");
      }
    } catch (error) {
      setSnackbar({ open: true, error: true, message: "Network error" });
    }
  };

  const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.error ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="First name"
                  helperText={errors.name?.message}
                  error={!!errors.name}
                  {...register("name")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  helperText={errors.email?.message}
                  error={!!errors.email}
                  {...register("email")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Select Role"
                  helperText={errors.role?.message}
                  select
                  SelectProps={{ native: true }}
                  error={!!errors.role}
                  {...register("role")}
                >
                  {roles.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Avatar URL"
                  helperText={errors.avatar?.message}
                  error={!!errors.avatar}
                  {...register("avatar")}
                />
              </Grid>
              {mode === "create" && (
                <>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="password"
                      label="Password"
                      helperText={errors.password?.message}
                      error={!!errors.password}
                      {...register("password")}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="password"
                      label="Verify Password"
                      helperText={errors.passwordConfirmation?.message}
                      error={!!errors.passwordConfirmation}
                      {...register("passwordConfirmation")}
                    />
                  </Grid>
                </>
              )}
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? <CircularProgress size={24} /> : "Save details"}
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
