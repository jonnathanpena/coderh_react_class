import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  Badge,
} from "@mui/material";
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';
import {
  IconButtonStyled
} from './styles/NavBarStyles';

const CartWidget = () => {
  const { cart } = useContext(cartContext);

  return (
    <IconButtonStyled
      size="large"
      aria-label="show 17 new notifications"
      color="inherit"
    >
      <Badge badgeContent={cart.length} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButtonStyled>
  );
}

export default CartWidget;