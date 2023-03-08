import { styled } from "@mui/material/styles";

import {
  Stack, Typography, Grid,
} from '@mui/material';

export const StackMainListContainerStyled = styled( Stack )(() => ({
  padding: 40,
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
}));

export const TypographyListTitleStyled = styled( Typography )(() => ({
  fontWeight: 400,
  fontSize: 26,
  lineHeight: '36px',
  color: '#0a66c2',
}));

export const GridCoursesListContainerStyled = styled( Grid )(() => ({
  marginTop: 15,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row'
}));