import {
  MainStackItemContainerStyled,
  ImageCourseStyled,
  TypographyCourseTitleStyled
} from './styles/ItemStyles';
import CourseLogoImageWidget from './CourseLogoImageWidget';
import { useNavigate } from 'react-router-dom';

const Item = ( props ) => {
  const { 
    id,
    name,
    provider,
    imageUrl,
    price,
    noshadow = false,
    clickDisabled = false,
  } = props;
  const navigate = useNavigate();

  const handledItemClick = (courseId) => () => {
    if (clickDisabled) {
      return;
    }

    navigate(`/item/${courseId}`);
  };

  return (
    <MainStackItemContainerStyled shadow={noshadow ? 0 : 1}>
      <ImageCourseStyled alt="course image" src={imageUrl} onClick={handledItemClick(id)}/>
      <TypographyCourseTitleStyled onClick={handledItemClick(id)}>
        {name}
      </TypographyCourseTitleStyled>
      <CourseLogoImageWidget provider={provider} course={{
        id,
        name,
        provider,
        imageUrl,
        price,
      }} onClick={handledItemClick(id)}/>
    </MainStackItemContainerStyled>
  );
}

export default Item;