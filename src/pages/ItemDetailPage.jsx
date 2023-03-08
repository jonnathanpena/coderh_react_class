import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../components/Item';
import useDataHooks from '../hooks/useDataHooks';

const ItemDetailPage = () => {
  const [course, setCourse] = useState(undefined);
  const {
    id
  } = useParams();
  const { getCourseById } = useDataHooks();

  useEffect(() => {
    if (id) {
      getCourseById(id).then(( item ) => setCourse(item));
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
          clickDisabled
        />
    </Box>
  );
}

export default ItemDetailPage;