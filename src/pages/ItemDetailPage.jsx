import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../components/Item';
import { getDb, courseCollectionName } from '../services/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemDetailPage = () => {
  const [course, setCourse] = useState(undefined);
  const {
    id
  } = useParams();

  useEffect(() => {
    if (id) {
      const db = getDb();
      const coursesCollection = collection(db, courseCollectionName);
      const q = query(coursesCollection, where('id', '==', id));
      getDocs(q).then(( snapshot ) => {
        const courses = snapshot.docs.map(( c ) => c.data());
        setCourse(courses[0]);
      });
    }
  }, [id])

  if (!course) {
    return <p>Loading...</p>;
  }

  return (
    <Box
      sx={{
        padding: '40px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    >
       <Item
          id={course.id}
          name={course.name}
          provider={course.provider}
          imageUrl={course.imageUrl}
          price={course.price}
          clickDisabled
        />
    </Box>
  );
}

export default ItemDetailPage;