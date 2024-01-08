import { useCallback, useEffect, useMemo, useState } from "react";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { useSelection } from "./hooks/use-selection.js";
import { Layout } from "./layout/dashboard/layout.jsx";
import { CustomersSearch } from "./sections/customers/customers-search.jsx";
import { CustomersTable } from "./sections/customers/customers-table.jsx";
import { applyPagination } from "./utils/apply-pagination.js";
import { useNavigate } from "react-router-dom";

const useCustomerIds = (customers) => {
  return useMemo(() => {
    return customers.map((customer) => customer.id);
  }, [customers]);
};

const Page = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [customers, setCustomers] = useState([]);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/users")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setCustomers(applyPagination(res, page, rowsPerPage));
      });
  }, []);

  const filteredCustomers = useMemo(() => {
    return data.filter(
      (customer) =>
        customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [data, searchQuery]);

  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate("/admin/customers/add");
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">Customers</Typography>
              </Stack>
              <div>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  }
                  onClick={handleAddClick}
                  variant="contained"
                >
                  Add
                </Button>
              </div>
            </Stack>
            <CustomersSearch onSearchChange={handleSearchChange} />
            <CustomersTable
              count={filteredCustomers.length}
              items={filteredCustomers}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

const Customers = () => (
  <Layout>
    <Page />
  </Layout>
);

export default Customers;
