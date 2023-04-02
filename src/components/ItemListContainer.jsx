import { useEffect, useState } from 'react';
import {
  StackMainListContainerStyled,
  TypographyListTitleStyled,
  GridCoursesListContainerStyled
} from './styles/ItemListContainerStyles';
import Item from './Item';
import { Grid } from '@mui/material';
import { providers } from './NavBar';
import {
  getDb, courseCollectionName
} from '../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

const ItemListContainmer = (props) => {
  const {
    title,
    categories = providers
  } = props;
  const [courses, setCourses] = useState(undefined);

  useEffect(() => {
    const db = getDb();
    const coursesCollection = collection(db, courseCollectionName);
    getDocs(coursesCollection).then(( snapshot ) => {
      setCourses(snapshot.docs.map(( course ) => course.data() ));
    });
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
                  price={course.price}
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