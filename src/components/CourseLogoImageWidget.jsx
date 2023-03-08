import { Box, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import icons from '../constants/resources/icons';
import {
  LogoProviderStyled
} from './styles/CourseLogoImageWidgetStyles';

const CourseLogoImageWidget = ( props ) => {
  const {
    provider
  } = props;

  const getproviderImage = (provider) => {
    switch (provider) {
      case 'Coursera':
        return icons.COURSERA_LOGO;
      case 'Udemy':
        return icons.UDEMY_LOGO;
      case 'EDX':
        return icons.EDX_LOGO;
      default:
        return icons.SKILLSHARE_LOGO;
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '15px',
      }}
    >
      <LogoProviderStyled alt="provider icon" src={getproviderImage(provider)} />
      <IconButton>
        <AddShoppingCartIcon />
      </IconButton>
    </Box>
  );
};

export default CourseLogoImageWidget;