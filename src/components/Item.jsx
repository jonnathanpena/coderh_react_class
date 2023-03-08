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
    <MainStackItemContainerStyled shadow={noshadow ? 0 : 1} onClick={handledItemClick(id)}>
      <ImageCourseStyled alt="course image" src={imageUrl} />
      <TypographyCourseTitleStyled>
        {name}
      </TypographyCourseTitleStyled>
      <CourseLogoImageWidget provider={provider} />
    </MainStackItemContainerStyled>
  );
}

export default Item;