import { useEffect, useState } from 'react';
import {
  StackMainListContainerStyled,
  TypographyListTitleStyled,
  GridCoursesListContainerStyled
} from './styles/ItemListContainerStyles';
import useDataHooks from '../hooks/useDataHooks';
import Item from './Item';
import { Grid } from '@mui/material';
import { providers } from './NavBar';

const ItemListContainmer = (props) => {
  const {
    title,
    categories = providers
  } = props;
  const [courses, setCourses] = useState(undefined);
  const { getFetchData } = useDataHooks();

  useEffect(() => {
    getFetchData().then(( data ) => setCourses(data));
  }, []);

  return (
    <StackMainListContainerStyled>
      {!courses ? (
        <p>Loading...</p>
      ): (
        <>
          <TypographyListTitleStyled>
            {title}
          </TypographyListTitleStyled>
          <GridCoursesListContainerStyled container spacing={3}>
            {courses.filter(( course ) => categories.includes(course.provider)).map(( course ) => (
              <Grid item key={course.id}>
                <Item
                  id={course.id}
                  name={course.name}
                  provider={course.provider}
                  imageUrl={course.imageUrl}
                />
              </Grid>
            ))}
          </GridCoursesListContainerStyled>
        </>
      )}
    </StackMainListContainerStyled>
  );
}

export default ItemListContainmer;