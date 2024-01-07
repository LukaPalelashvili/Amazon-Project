import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import ShoppingCartIcon from "@heroicons/react/24/solid/ShoppingCartIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import { SvgIcon } from "@mui/material";

export const items = [
  {
    title: "Overview",
    path: "/",
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Customers",
    path: "/customers",
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Products",
    path: "/products",
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingCartIcon />
      </SvgIcon>
    ),
  },
];
