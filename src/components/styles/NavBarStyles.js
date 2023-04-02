import { styled } from "@mui/material/styles";

import {
  AppBar,
  Typography,
  Button,
  IconButton
} from "@mui/material";

export const MainAppBarStyled = styled( AppBar )(() => ({
  background: 'white',
  left: 0,
  padding: '0 2.4em',
  top: 0,
  width: '100vw',
  borderBottom: '1px solid rgba(0,0,0,0.08)',
  boxShadow: 'none'
}));

export const TitlePageNameStyled = styled( Typography )(() => ({
  color: '#00000099 !important',
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.1rem',
  textDecoration: 'none',
  cursor: 'pointer',
}));

export const ButtonMenuItemStyled = styled( Button )(() => ({
  color: '#0a66c2 !important',
  textTransform: 'none'
}));

export const LinkItemTypographyStyled = styled( Typography )(() => ({
  color: '#00000099 !important',
}));

export const IconButtonStyled = styled( IconButton )(() => ({
  color: '#0a66c2 !important',
}));