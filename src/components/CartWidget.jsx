import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  Badge,
} from "@mui/material";
import {
  IconButtonStyled
} from './styles/NavBarStyles';

const CartWidget = () => {
  return (
    <IconButtonStyled
      size="large"
      aria-label="show 17 new notifications"
      color="inherit"
      >
      <Badge badgeContent={2} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButtonStyled>
  );
}

export default CartWidget;