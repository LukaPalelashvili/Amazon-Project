import { formatDistanceToNow } from "date-fns";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import EllipsisVerticalIcon from "@heroicons/react/24/solid/EllipsisVerticalIcon";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  SvgIcon,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const OverviewLatestCustomers = (props) => {
  const { sx } = props;
  const [customers, setCustomers] = useState([]);
  const [visibleActions, setVisibleActions] = useState(null);
  const listRefs = useRef({});
  const navigate = useNavigate();

  const toggleActions = (customerId) => {
    setVisibleActions(visibleActions === customerId ? null : customerId);
  };

  const handleClickOutside = (event) => {
    if (
      visibleActions &&
      !listRefs.current[visibleActions].contains(event.target)
    ) {
      setVisibleActions(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visibleActions]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/users?limit=12")
      .then((res) => res.json())
      .then((res) => {
        setCustomers(res);
      });
  }, []);

  return (
    <Card sx={sx}>
      <CardHeader title="Latest Customers" />
      <List>
        {customers.map((customer, index) => {
          const hasDivider = index < customers.length - 1;
          const ago = formatDistanceToNow(customer.updatedAt);

          return (
            <ListItem
              divider={hasDivider}
              key={customer.id}
              ref={(el) => (listRefs.current[customer.id] = el)}
            >
              <ListItemAvatar>
                {customer.avatar ? (
                  <Box
                    component="img"
                    src={customer.avatar}
                    sx={{
                      borderRadius: 1,
                      height: 48,
                      width: 48,
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      borderRadius: 1,
                      backgroundColor: "neutral.200",
                      height: 48,
                      width: 48,
                    }}
                  />
                )}
              </ListItemAvatar>
              <ListItemText
                primary={customer.name}
                primaryTypographyProps={{ variant: "subtitle1" }}
                secondary={`Updated ${ago} ago`}
                secondaryTypographyProps={{ variant: "body2" }}
              />
              <IconButton edge="end" onClick={() => toggleActions(customer.id)}>
                <SvgIcon>
                  <EllipsisVerticalIcon />
                </SvgIcon>
              </IconButton>
              {visibleActions === customer.id && (
                <Box
                  sx={{
                    position: "absolute",
                    right: 50,
                    backgroundColor: "white",
                    boxShadow: 3,
                  }}
                >
                  <Button
                    onClick={() =>
                      navigate(`/admin/customers/edit/${customer.id}`)
                    }
                    size="small"
                  >
                    View
                  </Button>
                </Box>
              )}
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Link to={"/admin/customers"}>
          <Button
            color="inherit"
            endIcon={
              <SvgIcon fontSize="small">
                <ArrowRightIcon />
              </SvgIcon>
            }
            size="small"
            variant="text"
          >
            View all
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
