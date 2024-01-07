import React, { useEffect, useState } from "react";
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
  MenuItem,
  Snackbar,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { ucFirst } from "../../../../helpers/index.js";

const schema = yup
  .object({
    title: yup.string().required("Title is required"),
    price: yup
      .number()
      .required("Price is required")
      .positive("Price must be positive"),
    description: yup.string().required("Description is required"),
    category: yup.string().required("Category is required"),
    images: yup
      .array()
      .of(yup.string().url("Must be a valid URL").required())
      .min(1, "At least one image URL is required")
      .required("At least one image URL is required"),
  })
  .required();

export const ProductDetailsForm = ({ product, mode }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    error: false,
    message: "",
  });

  const [imageUrls, setImageUrls] = useState([]);

  const {
    register,
    unregister,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues:
      mode === "create" ? { title: "", price: "", description: "" } : product,
    resolver: yupResolver(schema),
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories",
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const onSubmit = async (data) => {
    const productData = {
      ...data,
      images: imageUrls,
      categoryId: Number(data.categoryId),
    };

    const url =
      mode === "create"
        ? "https://api.escuelajs.co/api/v1/products"
        : `https://api.escuelajs.co/api/v1/products/${product.id}`;
    const method = mode === "create" ? "POST" : "PUT";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      setSnackbar({
        open: true,
        error: false,
        message: "Product created successfully",
      });
      // Additional actions after successful creation, like redirecting
    } catch (error) {
      setSnackbar({ open: true, error: true, message: error.message });
    }
  };

  useEffect(() => {
    // If editing, prefill the image URLs from the product data
    if (mode === "update" && product.images) {
      setImageUrls(product.images);
    }
  }, [product, mode]);

  const handleImageUrlChange = (event, index) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = event.target.value;
    setImageUrls(newImageUrls);
  };

  const addImageUrl = () => {
    setImageUrls([...imageUrls, ""]);
  };

  const removeImageUrl = (index) => {
    const newImageUrls = imageUrls.filter((_, idx) => idx !== index);
    setImageUrls(newImageUrls);
  };

  useEffect(() => {
    // Register the image URLs fields
    console.log("imageUrls", imageUrls);
    imageUrls.forEach((_, index) => {
      register(`images[${index}]`);
    });
  }, [register, unregister, imageUrls]);

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
        <CardHeader
          subheader="The information can be edited"
          title="Product Details"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              {/* Add TextFields for title, price, and description */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Title"
                  helperText={errors.title?.message}
                  error={!!errors.title}
                  {...register("title")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Price"
                  helperText={errors.price?.message}
                  error={!!errors.price}
                  {...register("price")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  helperText={errors.description?.message}
                  error={!!errors.description}
                  {...register("description")}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="category"
                  control={control}
                  defaultValue={product.category || ""}
                  render={({ field }) => (
                    <TextField
                      select
                      label="Category"
                      fullWidth
                      {...field}
                      helperText={errors.category?.message}
                      error={!!errors.category}
                    >
                      {categories.map((category) => (
                        <MenuItem key={category} value={category}>
                          {ucFirst(category)}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid>
              {imageUrls.map((url, index) => (
                <Grid item xs={12} key={index}>
                  <TextField
                    fullWidth
                    label={`Image URL ${index + 1}`}
                    value={url}
                    onChange={(e) => handleImageUrlChange(e, index)}
                    // This will only show an error on the first image field
                    helperText={index === 0 ? errors.images?.[0]?.message : ""}
                    error={!!(index === 0 && errors.images?.[0])}
                  />
                  <Button onClick={() => removeImageUrl(index)}>Remove</Button>
                </Grid>
              ))}
              <Grid item xs={12}>
                <Button onClick={addImageUrl}>Add Image URL</Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? <CircularProgress size={24} /> : "Save Product"}
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
