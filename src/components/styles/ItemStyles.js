import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MainStackItemContainerStyled = styled( Stack )((
  { shadow }
) => ({
  padding: 16,
  background: '#FFF',
  border: shadow ? '1px solid #DFE3E8' : 'none',
  borderRadius: shadow ? '8px' : 'none',
  width: 344,
  height: 320,
  flexDirection: 'column',
  justifyContent: 'space-between',
  cursor: 'pointer'
}));

export const ImageCourseStyled = styled( 'img' )(() => ({
  width: '100%',
  height: 200,
  borderRadius: '8px',
}));

export const TypographyCourseTitleStyled = styled( Typography )(() => ({
  marginTop: 20,
  color: '#000',
  fontWeight: 400,
  fontSize: 16,
  lineHeight: '24px',
}));