import { styled } from "@mui/material/styles";

export const LogoProviderStyled = styled( 'img' )(({ theme }) => ({
  height: 20,
  [theme.breakpoints.down( 'sm' )]: {
    height: 15,
  },
}));
